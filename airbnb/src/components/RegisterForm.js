import React, { useState, useContext } from "react";
import { LegitContext } from "../contexts/LegitContext";
import "../styles/LoginForm.scss";

const RegisterForm = props => {
  //   const { auth, setAuth } = useContext(LegitContext);
  const [userCreds, setUserCreds] = useState({
    username: "",
    password: "",
    confirmed: ""
  });

  const handleChange = e => {
    setUserCreds({ ...userCreds, [e.target.name]: e.target.value });
  };

  const register = e => {
    e.preventDefault();
    console.log("Good Job registering");
    props.history.push("/");
  };

  const login = e => {
    e.preventDefault();
    props.history.push("/");
  };

  return (
    <div className="form-card regstyle">
      <form>
        <h1>Register</h1>
        <label htmlFor="username">username</label>
        <input
          name="username"
          type="text"
          onChange={handleChange}
          value={userCreds.username}
        ></input>
        <label htmlFor="password">password</label>
        <input
          name="password"
          type="password"
          onChange={handleChange}
          value={userCreds.password}
        ></input>
        {/* <label htmlFor="confirm">confirm password</label> */}
        {/* <input
          name="confirm"
          type="password"
          onChange={handleChange}
          value={userCreds.confirm}
        ></input> */}
        <div className="btn-div">
          <button className="submit" onClick={register}>
            Submit
          </button>
          <button className="login2" onClick={login}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
