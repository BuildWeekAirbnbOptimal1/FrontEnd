import React, { useState, useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { LegitContext } from "../contexts/LegitContext";
import "../styles/LoginForm.scss";

const RegisterForm = props => {
  //   const { auth, setAuth } = useContext(LegitContext);
  const [userCreds, setUserCreds] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: ""
  });

  const handleChange = e => {
    setUserCreds({ ...userCreds, [e.target.name]: e.target.value });
  };

  const register = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("user/register", userCreds)
      .then(res => {
        console.log(res);
        // localStorage.setItem("token", res.data.payload);
        // props.history.push("/listings");
      })
      .catch(err => {
        localStorage.removeItem("token");
        console.log(err);
      });
  };

  const login = e => {
    e.preventDefault();
    props.history.push("/");
  };

  return (
    <div className="form-card regstyle">
      <form>
        <h1>Register</h1>
        <label htmlFor="firstname">first name</label>
        <input
          name="firstname"
          type="text"
          onChange={handleChange}
          value={userCreds.firstname}
        ></input>
        <label htmlFor="lastname">last name</label>
        <input
          name="lastname"
          type="text"
          onChange={handleChange}
          value={userCreds.lastname}
        ></input>
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
        <label htmlFor="confirm">email</label>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={userCreds.confirm}
        ></input>
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
