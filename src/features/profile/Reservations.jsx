import Card from "./Card";

function Reservations() {
  return (
    <div>
      <Card title="Upcoming Reservations">
        <p>Date: 5th April</p>
        <p>Time: 3:00 PM</p>
        <p>Location: Elderly Home A</p>
        <button>Reschedule</button> <button>Cancel</button>
      </Card>

      <Card title="Past Reservations">
        <p>Date: 1st March</p>
        <p>Feedback: "Had a great time talking to John!"</p>
        <button>Add Notes</button>
      </Card>
    </div>
  );
}

export default Reservations;
