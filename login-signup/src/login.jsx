import React from "react";
import { Link } from "react-router-dom";

function login() {
  return (
    <div className="container">
      <div className="login-form">
        <div className="ring">
          <i style={{ "--clr": "#00ff0a" }}></i>
          <i style={{ "--clr": "#ff0057" }}></i>
          <i style={{ "--clr": "#fffd44" }}></i>

          <div className="login">
            <h2>Login</h2>
            <div className="inputBx">
              <input type="email" placeholder="Email" />
            </div>
            <div className="inputBx">
              <input type="password" placeholder="Password" />
            </div>
            <div className="inputBx">
              <input type="submit" value="Log In" />
            </div>
            <div className="links">
              <p>Forgot Password?</p>
              <Link to={"/signup"}>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="login-info">
        <h1>Welcome Back!</h1>
        <p>Please log in to continue.</p>
      </div>
    </div>
  );
}

export default login;
