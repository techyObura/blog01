import "./register.css";

import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
        />

        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter your username..."
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your email..."
        />

        <label>Confirm password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your email..."
        />
        <button className="registerSubmitBtn">
          <Link className="link" to="/login">
            Register
          </Link>
        </button>
      </form>
      <button className="registerLoginBtn">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
};

export default Register;
