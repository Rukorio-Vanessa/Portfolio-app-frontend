import React from "react";
import { useState } from "react";
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
      <div id="log-in-intro">
        <h1>Welcome To MyPortfolio</h1>
        <h2>Login to proceed</h2>
      </div>
    <div id="log-in-form"> 
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br/>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br/>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br/>
        <Link type="login-button" className="btn cancelbtn mx-auto" to="/home" >Log In</Link>
        <Link type="login-button" className="btn cancelbtn mx-auto" to="/register" >Register</Link> 
 
      </form>
    </div>
    </div>
  );
}
export default Login;