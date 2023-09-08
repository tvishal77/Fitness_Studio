import React from 'react';
import { useEffect } from 'react';
import Aos from "aos";
import "./App.css"
import Home from './components/UI/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/UI/Register';
import RegisterState from "./components/context/reg/RegState"
// Your React component
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Router>
        <RegisterState>
          <Routes>
            <Route exact path="/" Component={Home} ></Route>

            <Route path="/register" Component={Register} ></Route>
          </Routes>
        </RegisterState>
      </Router>
    </>
  );
}

export default App;