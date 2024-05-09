import "./register.scss";
import { Link } from "react-router-dom";
import React from "react";

function Register() {
  return (
    <div className="login">
      <div className="formContainer">
        <form>
          <h1>Welcome back</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="email" placeholder="Password" />
          <input name="password" type="password" placeholder="Password" />
          <button>Register</button>
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
      <h2>ENTER SEE DOCTOR</h2>
        <img src="/bghero.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
