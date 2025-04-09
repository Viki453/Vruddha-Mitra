const url = "http://localhost:3000";

function formatCityName(city) {
  if (!city) return city;
  city = city.trim().toLowerCase(); // Remove leading/trailing spaces and lowercase everything
  const words = city.split(/\s+/); // Split by one or more spaces
  words[0] = words[0][0].toUpperCase() + words[0].slice(1); // Capitalize first word
  return words.join(" "); // Join back the string
}

export async function getCityId(city) {
  const useCity = formatCityName(city);

  try {
    const response = await fetch(`${url}/city?name=${useCity}`);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json(); // Convert response to JSON
    return data.city_id; // Return only the city ID
  } catch (error) {
    console.error("Error fetching city ID:", error);
    return null; // Return null if city is not found
  }
}

export async function getVListCity(city) {
  const cityId = await getCityId(city); // Properly await the city ID

  if (!cityId) {
    console.error("Invalid city name provided.");
    return null; // Handle error gracefully
  }

  try {
    const response = await fetch(`${url}/city?id=${cityId}`);
    if (!response.ok) throw new Error("Failed to fetch VList for city");

    return await response.json(); // Return JSON data
  } catch (error) {
    console.error("Error fetching VList:", error);
    return null;
  }
}

export async function getVListRadius(lat, long, radius) {
  try {
    const response = await fetch(
      `${url}/profiles/nearby?lat=${lat}&long=${long}&radius=${radius}`
    );
    if (!response.ok) throw new Error("Failed to fetch nearby profiles");

    return await response.json(); // Return JSON data
  } catch (error) {
    console.error("Error fetching nearby profiles:", error);
    return null;
  }
}

export async function vDetails(v_id) {
  const response = await fetch(`${url}/Vruddha/${v_id}`);

  if (!response.ok) {
    throw new Error(`Error fetching details: ${response.statusText}`);
  }

  return response.json(); // Convert response to JSON before returning
}
