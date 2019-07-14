import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Search from "./components/pages/Search.js";
import Saved from "./components/pages/Saved.js";
import Header from "./components/Header/index.js"

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavTabs />
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  );
}

export default App;
