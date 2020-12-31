import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Articles from "./components/pages/Articles";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <>
    <Router>
      <Navbar />
       <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/articles' component={Articles} />

       </Switch>
      </Router>
    </>
  );
}

export default App;
