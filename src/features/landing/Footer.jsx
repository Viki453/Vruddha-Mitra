import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const d = new Date();
let year = d.getFullYear();

function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/employers">Employers</Link>
        </li>
        <li>
          <Link to="/be-a-vruddhamitra">Be a VruddhaMitra</Link>
        </li>
        <li>
          <Link to="/members">Members</Link>
        </li>
        <li>
          <Link to="/careers">Careers</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
      </ul>
      <p>ⓒ Copyright {year}</p>
    </div>
  );
}

export default Footer;
