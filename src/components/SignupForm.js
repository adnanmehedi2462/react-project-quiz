import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  const Navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    //myvalidation
    if (password !== confirmPassword) {
      return setError("Passwords Don't Match !!!");
    }
    if (password.length < 6) {
      return setError("Use 6 or More Password Length please !!!");
    }
    
    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      Navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account!!");
    }
  }

  return (
    <>
      <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Enter your name"
          required
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          icon="person"
        />
        <TextInput
          type="text"
          required
          placeholder="Enter your Email"
          icon="alternate_email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextInput
          type="password"
          placeholder="Enter your password"
          icon="lock"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <TextInput
          type="password"
          placeholder="Confirm password"
          icon="lock_clock"
          required
          value={confirmPassword}
          onChange={(e) => {
            setconfirmPassword(e.target.value);
          }}
        />
        <Checkbox
          text=" I agree to the Terms &amp; Conditions"
          required
          value={agree}
          onChange={(e) => {
            setAgree(e.target.value);
          }}
        />
        <Button type="submit" disabled={loading}>
          <span>Submit Now</span>
        </Button>
        {error && <p className="error">{error}</p>}
        <div className="info">
          Already have an account?{" "}
          <a>
            <NavLink to="/login">Login</NavLink>
          </a>{" "}
          instead.
        </div>
      </Form>
    </>
  );
}
