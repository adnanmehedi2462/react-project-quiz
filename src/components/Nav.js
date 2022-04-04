import { NavLink } from 'react-router-dom';
import logo from "../assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
        <NavLink to="/"> <a  className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            {/* <img src="./assets/images/logo-bg.png" alt="Learn with Sumit Logo" /> */}

            <h3>Learn with Sumit</h3>
          </a>
          </NavLink>
        </li>
      </ul>

      <Account />
    </nav>
  );
}
