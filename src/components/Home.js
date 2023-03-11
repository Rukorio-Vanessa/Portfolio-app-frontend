import React from "react";
import Login from "./Login";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
function Home(){
    return(
        <div className="home-container">
            <Navbar/>
            
      <div className="home-body" id="home">
        <h1>Welcome To MyPortfolio</h1>

        <h2 className="heading-2"> Please Log In to Proceed </h2>

        <p>
          MyPortfolio offers a quick and easy way for you to handle your projects and skills
        </p>
        <h3>My Projects</h3>
        <h3>My Skills</h3>
        </div>
      </div>
    );
}

export default Home;