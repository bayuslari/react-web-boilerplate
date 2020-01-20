import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavMenu from "./components/layout/NavMenu";
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <NavMenu />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/About' component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
