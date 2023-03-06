import React from "react";
import { useState } from "react";
import ReactDOM  from "react-dom";
import validator from 'validator';
import Navbar from "./Navbar";



function Login(){

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    // User Login info
    const database = [
      {
        username: "Vanessa",
        password: "firstpass"
      },
      {
        username: "Rukorio",
        password: "secondpass"
      }
    ];
  
    const errors = {
      uname: "incorrect username",
      pass: "incorrect password",
      email: "incorrect email"
    };
  
    const handleSubmit = (event) => {
      //Prevent reloading
      event.preventDefault();
  
      var { uname, email, pass } = document.forms[0];
  
      const userData = database.find((user) => user.username === uname.value);
  
      if (userData) {
        if (userData.password !== pass.value) {

          setErrorMessages({ name: "pass", message: errors.pass });

        } else if (!isValidEmail(email.value)) {

          setErrorMessages({ name: "email", message: errors.email });

        } else {

          setIsSubmitted(true);

        }
      } else {

        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };
  
    //installed 'validtor' to check email's validity    
    const isValidEmail = (email) => {
      return validator.isEmail(email);
    }; 
  
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
    const formDisplay = (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Email </label>
            <input type="email" name="email" required />
            {renderErrorMessage("email")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
    
    return (
        <div className="app">
            <Navbar/>
          <div className="login-form">
            <div className="title">Sign In</div>
            {isSubmitted ? (
              <div>Welcome back!</div>
            ) : (
              formDisplay
            )}
          </div>
        </div>
      );
    
}

export default Login;