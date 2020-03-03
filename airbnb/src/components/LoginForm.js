import React from "react";
import "../styles/LoginForm.scss";

const LoginForm = () => {
  return (
    <div className="form-card">
      <form>
        <h1>Log in to Optimize</h1>
        <label htmlFor="username">username</label>
        <input name="username" type="text"></input>
        <label htmlFor="password">password</label>
        <input name="password" type="password"></input>
        <div>
          <button onClick={() => console.log("Clicked login")}>Login</button>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
