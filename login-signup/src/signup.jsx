import React from "react";
import { Link } from "react-router-dom";

function signup() {
  return (
    <div className="container">
      <div className="login-form">
        <div className="ring">
          <i style={{ "--clr": "#00ff0a" }}></i>
          <i style={{ "--clr": "#ff0057" }}></i>
          <i style={{ "--clr": "#fffd44" }}></i>

          <div className="login">
            <h2>Sign Up</h2>
            <div className="inputBx">
              <input type="email" placeholder="Email" />
            </div>
            <div className="inputBx">
              <input type="password" placeholder="Create Password" />
            </div>
            <div className="inputBx">
              <input type="password" placeholder="Confirm Password" />
            </div>
            <div className="inputBx">
              <input type="submit" value="Sign Up" />
            </div>
            <div className="links">
              <p>Already have an account</p>
              <Link to={"/login"}>Log In</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="login-info">
        <h1>Join In</h1>
        <p>Be a part of our Innovation</p>
      </div>
    </div>
  );
}

export default signup;
