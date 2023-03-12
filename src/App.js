import React from 'react';
import Home from './components/Home';
import { Routes, Route} from 'react-router-dom';
import Login from './components/Login'
import './App.css'
import Projects from './components/Projects';
import Register from './components/Register';
import Skills from './components/Skills';
import Projectlist from './components/ProjectList';
import Logout from './components/Logout';


function App() {
  return (

    
    <div className="App">
      <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectlist" element={<Projectlist />} />
          <Route path="/logout" element={<Logout />} />

      </Routes>
    </div>
  );
}


export default App;
