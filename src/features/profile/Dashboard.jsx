import styles from "./Dashboard.module.css";
import Card from "./Card";

function Dashboard() {
  return (
    <div className={styles.mainContent}>
      <Card title="Profile Summary">
        <p>Name: John Doe</p>
        <p>Location: New York</p>
        <p>Interests: Coding, Hiking</p>
      </Card>

      <Card title="Volunteer Stats">
        <p>Total Visits: 15</p>
        <p>Hours Spent: 40</p>
        <p>People Helped: 10</p>
      </Card>

      <Card title="Upcoming Reservations">
        <p>Next Visit: 5th April, 3:00 PM</p>
        <p>Location: Elderly Home A</p>
      </Card>

      <Card title="Recent Activity">
        <p>Last Visit: Helped an elderly person with grocery shopping.</p>
      </Card>
    </div>
  );
}

export default Dashboard;
