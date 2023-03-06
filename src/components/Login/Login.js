import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";




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


  const handleSubmit = (event) => {
    event.preventDefault();
    // POST mthd
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
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
        <Link type="login-button" className="btn cancelbtn mx-auto" to="/portfoliopage" >Log In</Link>
        <Link type="login-button" className="btn cancelbtn mx-auto" to="/register" >Register</Link> 
 
      </form>
    </div>
  );
}
export default Login;