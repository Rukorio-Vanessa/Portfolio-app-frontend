import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './components/Login'
import './App.css'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
    </BrowserRouter>
    
    </div>
  );
}


export default App;
