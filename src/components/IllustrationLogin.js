import logillu_img from "../assets/images/login.svg";
import classes from "../styles/Illustration.module.css";
export default function IllustrationLogin() {
  return (
    <div className={classes.illustration}>
      <img src={logillu_img} alt="Login" />
    </div>
  );
}
