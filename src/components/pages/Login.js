import { NavLink } from 'react-router-dom';
import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import IllustrationLogin from "../IllustrationLogin";
import TextInput from "../TextInput";
export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <IllustrationLogin />
        <Form method="post" className={`${classes.login} `}>
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

          <Button>
            <span>Login Now</span>
          </Button>
          <div class="info">
            Don't have an account? <a> <NavLink to="/signup" >Signup</NavLink></a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
