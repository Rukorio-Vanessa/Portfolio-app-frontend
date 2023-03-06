import React from "react";
import { NavLink } from "react-router-dom";


function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">

            <h3 className="navbar-brand">MY PORTFOLIO</h3>
            <NavLink to="/">HOME</NavLink> 
            <NavLink to="/login">LOG IN</NavLink>
            
            
          </div>
        </nav>
    )
}

export default Navbar;