import React from "react";

export default function Login() {
  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <form>
        <div className="row">
          <label>User Id</label>
          <input type="text" name="user_id" placeholder="Enter user id" />
        </div>
        <div className="row">
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter passowrd" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
