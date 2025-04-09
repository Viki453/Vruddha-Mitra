import { NavLink, Link } from "react-router";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/vm/app">Health Plans</NavLink>
          </li>
          <li>
            <NavLink to="/employers">Employers</NavLink>
          </li>
          <li>
            <NavLink to="/features">Be a Vruddha Mitra</NavLink>
          </li>
          <li>
            <NavLink to="/resources">Resources</NavLink>
          </li>
        </ul>
        <div className={styles.lButton}>
          <Link to="login">Login</Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
