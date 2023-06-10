import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { login } from "../../app/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    if (name === "Admin" && pwd === "1234") {
      dispatch(
        login({
          name: name,
          pwd: pwd,
          loggedIn: true,
        })
      );
      navigate("/");
    } else {
      alert("Invalid username or password");
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
        <button className="alazea-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
