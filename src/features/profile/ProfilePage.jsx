import styles from "./ProfilePage.module.css";
import { NavLink, Outlet, useNavigate } from "react-router";
import UserProfile from "./UserProfile";
// import Sidebar from "../components/Sidebar";

const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  location: "New York, USA",
  bio: "Software developer with a passion for open-source projects.",
  interests: ["Coding", "Hiking", "Photography"],
  profilePicture: "https://via.placeholder.com/100", // Placeholder image URL
};

function ProfilePage() {
  const navigate = useNavigate();
  // return <h1>sdf</h1>;
  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.sideBar}>
          <button onClick={() => navigate("/vm/app")}>Go back</button>
          <div className={styles.img}></div>
          <ul className={styles.sideBarList}>
            <li>
              <NavLink to="." end>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="reservations">Reservations</NavLink>
            </li>
            <li>
              <NavLink to="editprofile">Edit Profile</NavLink>
            </li>
            <li>
              <NavLink to="messages">Messages</NavLink>
            </li>
            <li>
              <NavLink to="notifications">Notifications</NavLink>
            </li>
            <li>
              <NavLink to="activity">Activity</NavLink>
            </li>
            <li>
              <NavLink to="feedback">Feedback</NavLink>
            </li>
            <li>
              <NavLink to="support">Support</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.main}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

// function ProfilePage() {
//   return (
//     <div style={{ display: "flex" }}>
//       {/* <Sidebar /> */}
//       <div style={{ flex: 1, padding: "20px" }}>
//         <h1>User Dashboard</h1>
//         <UserProfile user={user} />
//         {/* Additional sections like Activity Feed and Statistics can be added here */}
//       </div>
//     </div>
//   );
// }

export default ProfilePage;
