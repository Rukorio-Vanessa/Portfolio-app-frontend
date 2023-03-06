import React from "react";
import { useState } from "react";
import ReactDOM  from "react-dom";
import validator from 'validator';
import Navbar from "./Navbar";



function Login(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  

  return (
    <div>
      <Navbar/>
      <h2>Sign In</h2>
      <form >
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
export default Login;