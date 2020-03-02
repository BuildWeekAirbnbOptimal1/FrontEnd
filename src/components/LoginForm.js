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
    console.log(auth);
    props.history.push("/listings");
  };
  const goToRegister = () => {
    props.history.push("/register");
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
        <div className="btn-div">
          <button className="login" onClick={login}>
            Login
          </button>
          <button className="register" onClick={goToRegister}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
