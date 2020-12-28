import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import FirstSection from "./components/firstSection";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <>
    <Router>
      <Navbar />
       <FirstSection />
       <Switch>
         <Route path="/" exact />
       </Switch>
      </Router>
    </>
  );
}

export default App;
