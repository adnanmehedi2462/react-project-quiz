import { NavLink } from "react-router-dom";
import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form method="post" className={`${classes.signup} `}>
          <TextInput type="text" placeholder="Enter your name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter your Email"
            icon="alternate_email"
          />
          <TextInput
            type="password"
            placeholder="Enter your password"
            icon="lock"
          />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <Checkbox text=" I agree to the Terms &amp; Conditions" />
          <Button>
            <span>Submit Now</span>
          </Button>
          <div className="info">
            Already have an account?{" "}
            <a>
              <NavLink to="/login">Login</NavLink>
            </a>{" "}
            instead.
          </div>
        </Form>
      </div>
    </>
  );
}
