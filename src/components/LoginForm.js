import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  const { login } = useAuth();
  const Navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    //myvalidation

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      Navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(" Password or Email not match !! Failed to Login !!");
    }
  }

  return (
    <>
      <Form method="post" style={{ height: "330px" }} onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Enter your Email"
          icon="alternate_email"
          required
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

        <Button type="submit" disabled={loading}>
          <span>Login Now</span>
        </Button>
        {error && <p className="error">{error}</p>}
        <div class="info">
          Don't have an account?{" "}
          <a>
            {" "}
            <NavLink to="/signup">Signup</NavLink>
          </a>{" "}
          instead.
        </div>
      </Form>
    </>
  );
}
