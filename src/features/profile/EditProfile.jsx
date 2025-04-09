import Card from "./Card";

function EditProfile() {
  return (
    <div>
      <Card title="Edit Profile">
        <label>Name:</label> <input type="text" placeholder="John Doe" />
        <label>Email:</label>{" "}
        <input type="email" placeholder="john@example.com" />
        <label>Phone:</label> <input type="text" placeholder="+123456789" />
        <label>Interests:</label>{" "}
        <input type="text" placeholder="Hiking, Coding" />
        <button>Save Changes</button>
      </Card>
    </div>
  );
}

export default EditProfile;
