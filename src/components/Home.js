import React from "react";
import Navbar from "./Navbar";
function Home(){
    return(
        <div className="home-container">
            <Navbar/>
            
      <div className="home-body" id="home">
        <h1>Welcome To Your Portfolio Page!</h1>

        <h2 className="heading-2"> Please Log In to Proceed </h2>

        <p>
          MyPortfolio offers a quick and easy way for you to handle your projects and skills
        </p>

        </div>
        </div>
    );
}

export default Home;