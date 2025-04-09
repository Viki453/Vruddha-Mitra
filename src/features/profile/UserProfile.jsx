import { useNavigate } from "react-router";
import styles from "./UserProfile.module.css";
import PropTypes from "prop-types";

function UserProfile({ user }) {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>Go back</button>
      <div className={styles.profileContainer}>
        <div className={styles.profileHeader}>
          <img
            src={user.profilePicture}
            alt={`${user.name}'s profile`}
            className={styles.profileImage}
          />
          <h1 className={styles.userName}>{user.name}</h1>
        </div>
        <div className={styles.profileDetails}>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Location:</strong> {user.location}
          </p>
          <p>
            <strong>Bio:</strong> {user.bio}
          </p>
          <p>
            <strong>Interests:</strong> {user.interests.join(", ")}
          </p>
        </div>
        {/* Placeholder for Activity Feed */}
        <div className={styles.activityFeed}>
          <h2>Activity Feed</h2>
          <p>No recent activities.</p>
        </div>
        {/* Placeholder for Statistics */}
        <div className={styles.statistics}>
          <h2>Statistics</h2>
          <p>No statistics available.</p>
        </div>
      </div>
    </>
  );
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    interests: PropTypes.arrayOf(PropTypes.string).isRequired,
    profilePicture: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserProfile;
