import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


function Register(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleRegister = (event) => {
      event.preventDefault();
  
      //check if the passwords are the same
      if (password !== confirmPassword) {
        alert("Sorry the passwords do not match!");
        return;
      }
  
      //Registration logic
  
    };
  
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleRegister}>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <Link type="login-button" className="btn cancelbtn mx-auto" to="/portfoliopage">Register</Link> 
        </form>
      </div>
    );
}

export default Register;