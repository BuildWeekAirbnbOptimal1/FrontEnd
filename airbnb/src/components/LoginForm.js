import React, { useState, useContext } from "react";
import { LegitContext } from "../contexts/LegitContext";
import "../styles/LoginForm.scss";

const LoginForm = props => {
  const { auth, setAuth } = useContext(LegitContext);
  const [creds, setCreds] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const login = e => {
    e.preventDefault();
    setAuth(true);
    props.history.push("/listings");
  };
  return (
    <div className="form-card">
      <form>
        <h1>Log in to Optimize</h1>
        <label htmlFor="username">username</label>
        <input
          name="username"
          type="text"
          onChange={handleChange}
          value={creds.username}
        ></input>
        <label htmlFor="password">password</label>
        <input
          name="password"
          type="password"
          onChange={handleChange}
          value={creds.password}
        ></input>
        <div>
          <button onClick={login}>Login</button>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
