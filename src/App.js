import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './components/Login'
import './App.css'
import Projects from './components/Projects';
import Register from './components/Register';
import Skills from './components/Skills';
import PortfolioPage from './components/PortfolioPage';
import Portfoliopage from './components/PortfolioPage';
import Navbar from './components/Navbar';


function App() {
  return (

    
    <div className="App">
      <BrowserRouter>
    <Switch>
     <Route path='/register'>
        <Register/>
      </Route>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/'>
        <Login />
      </Route>
      <Route path='/portfoliopage'>
        <Register/>
      </Route>
      <Route path='/projects'>
        <Register/>
      </Route>
      <Route path='/register'>
        <Register/>
      </Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}


export default App;
