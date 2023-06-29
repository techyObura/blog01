import "./login.css";

import React from "react";
import { Link } from "react-router-dom";

const Login = ({ setUser }) => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your email..."
        />
        <button className="loginBtn" onClick={() => setUser(true)}>
          <Link className="link" to="/">
            Login
          </Link>
        </button>
      </form>
      <button className="registerBtn">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
