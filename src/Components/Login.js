import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { login } from "../features/userSlice";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");

  const dispatch = useDispatch();
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     dispatch(
  //       login({
  //         name: name,
  //         pwd: pwd,
  //         loggedIn: true,
  //       })
  //      );
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation or check against specific user credentials
    if (name === "Admin" && pwd === "1234") {
      dispatch(
        login({
          name: name,
          pwd: pwd,
          loggedIn: true,
        })
      );
    } else {
      alert("Invalid username or password"); // Display an error message or handle invalid credentials
    }
  };

  return (
    <div className="login">
          <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
            <h1>Login Here</h1>
            <input
              type="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="Your Password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            ></input>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
    
  );
};

export default Login;
