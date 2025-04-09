import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.navContainer}>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.logo}>LOGO</li>
          <li>
            <NavLink to="/">Logout</NavLink>
          </li>
          <li>
            <NavLink to="/vm/profile">Profile</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
