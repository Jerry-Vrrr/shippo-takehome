import React from "react";
import "./Login.css";

export default function ({
  user,
  setUser,
  password,
  setPassword,
  setLoggedIn,
}) {
  const loginUser = (e) => {
    setUser(e.target.value);
  };
  const loginPass = (e) => {
    setPassword(e.target.value);
  };
  const submitLogin = (e) => {
    setLoggedIn(true);
  };

  return (
    <div>
      <h4>Enter Username and Password to Login</h4>
      <form className="login" onSubmit={(event) => submitLogin(event)}>
        <input
          className="input"
          type="text"
          placeholder="Username"
          name="username"
          value={user}
          required
          onChange={(event) => loginUser(event)}
        />
        <input
          className="input"
          type="text"
          placeholder="Password"
          name="password"
          value={password}
          required
          onChange={(event) => loginPass(event)}
        />
        <button className="button">
          <span className="text">Login</span>
        </button>
      </form>
    </div>
  );
}
