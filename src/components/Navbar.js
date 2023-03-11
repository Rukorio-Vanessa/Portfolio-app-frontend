import React from "react";
import { NavLink } from "react-router-dom";


function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">

            <h3 className="navbar-brand">MY PORTFOLIO</h3>
            <NavLink to="/home">Home</NavLink> 
            <NavLink to="/skills">Add Skills</NavLink>
            <NavLink to="/projects">Add Projects</NavLink>

            
            
          </div>
        </nav>
    )
}

export default Navbar;