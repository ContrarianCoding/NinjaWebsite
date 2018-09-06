import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import MiningRig from "./MiningRig";
import Login from "./Login";
import Coins from "./Coins";
import Stuff from "./Stuff";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Ninja Mining</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/miningRig">Minning rigs</NavLink></li>
            <li><NavLink to="/coins">Coins</NavLink></li>
            <li><NavLink to="/stuff">Da team</NavLink></li>
            <li><NavLink to="/contact">Contact us</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/miningRig" component={MiningRig} />
            <Route path="/coins" component={Coins} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;