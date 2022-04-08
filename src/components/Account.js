import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Account.module.css";
export default function Account() {
  const { currenetUser, logout } = useAuth();

  return (
    <div className={classes.account}>
      {currenetUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currenetUser.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logout}
          >
          
            logout
          </span>
        </>
      ) : (
        <>
          <NavLink to="/signup"> Signup </NavLink>
          <NavLink to="/login"> Login </NavLink>
        </>
      )}

      {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
    </div>
  );
}
