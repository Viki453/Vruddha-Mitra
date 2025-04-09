import express from "express";
import pg from "pg";

const app = express();
const port = 3000;

// PostgreSQL Database Connection
const db = new pg.Client({
  user: "postgres",
  password: "RB262JZ",
  host: "localhost",
  port: 5432,
  database: "VrudhaMitra",
});

db.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Connection error", err.stack));

app.get("/", (req, res) => {
  res.send(`<script>alert("Working");</script>`);
});

// Fetch a specific Vruddha by ID
app.get("/Vruddha/:id", async (req, res) => {
  try {
    const v_ID = parseInt(req.params.id, 10);
    if (isNaN(v_ID)) return res.status(400).json({ error: "Invalid ID" });

    const { rows } = await db.query("SELECT * FROM vruddha WHERE v_id = $1", [
      v_ID,
    ]);

    return rows.length > 0
      ? res.json(rows[0])
      : res.status(404).json({ error: "Vruddha not found" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Fetch all Vruddha in a specific Institute by ID
app.get("/institute/:id", async (req, res) => {
  try {
    const i_ID = parseInt(req.params.id, 10);
    if (isNaN(i_ID)) return res.status(400).json({ error: "Invalid ID" });

    const { rows } = await db.query(
      `SELECT * FROM institute AS i 
       INNER JOIN vruddha AS v ON v.inst_id = i.inst_id 
       WHERE i.inst_id = $1`,
      [i_ID]
    );

    return res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Fetch city details by name or ID
app.get("/city", async (req, res) => {
  try {
    if (req.query.name) {
      // Get city ID by name (case-insensitive)
      const { rows } = await db.query(
        "SELECT city_id FROM city WHERE LOWER(city_name) = LOWER($1)",
        [req.query.name]
      );

      return rows.length > 0
        ? res.json({ city_id: rows[0].city_id })
        : res.status(404).json({ error: "City not found" });
    }

    if (req.query.id) {
      // Get vruddha & institute details by city ID
      const cityId = parseInt(req.query.id, 10);
      if (isNaN(cityId))
        return res.status(400).json({ error: "Invalid city ID" });

      const { rows } = await db.query(
        `SELECT * FROM vruddha AS v 
         JOIN institute AS i ON v.inst_id = i.inst_id 
         WHERE city_id = $1`,
        [cityId]
      );

      return res.json(rows);
    }

    return res.status(400).json({
      error: "Please provide either 'name' or 'id' as a query parameter",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/profiles/nearby", async (req, res) => {
  try {
    const { lat, long, radius } = req.query;

    // Validate input
    if (!lat || !long || !radius) {
      return res
        .status(400)
        .json({ error: "Missing required parameters: lat, long, radius" });
    }

    // SQL Query
    const query = `
    SELECT * FROM (
        SELECT v.*, i.*, 
              (6371 * ACOS(COS(RADIANS($1)) * COS(RADIANS(i.latitude)) * 
              COS(RADIANS(i.longitude) - RADIANS($2)) + SIN(RADIANS($1)) * 
              SIN(RADIANS(i.latitude)))) AS distance 
        FROM vruddha AS v 
        JOIN institute AS i ON v.inst_id = i.inst_id
    ) AS nearby_profiles
    WHERE distance <= $3
    ORDER BY distance;
`;

    // Execute query
    const { rows } = await db.query(query, [lat, long, radius]);
    res.json(rows);
  } catch (error) {
    console.error("Error fetching nearby profiles:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
