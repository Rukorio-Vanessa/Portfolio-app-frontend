import React from "react";
import { useState } from "react";

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
  
      // perform registration logic here
      // ...
  
      // redirect to another page on success
      window.location.href = '/projects';
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
          <button type="submit">Register</button>
        </form>
      </div>
    );
}

export default Register;