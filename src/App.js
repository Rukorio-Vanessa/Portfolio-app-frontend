import React from 'react';
import Home from './components/Home';
import { Route, Switch } from "react-router-dom";
import Login from './components/Login'


function App() {
  return (
    <div className="App">
      
    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
    
    </div>
  );
}


export default App;
