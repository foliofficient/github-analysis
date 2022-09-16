import React from "react";
import { Router, Link } from "@reach/router"

import './App.css';
import Home from "./Home";
import Uniswap from "./Uniswap";

let HomeRoute = () => <Home/>
let UniswapRoute = () => <Uniswap/>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <HomeRoute path="/"/>
          <UniswapRoute path="/uniswap"/>
        </Router>
      </header>
    </div>
  );
}

export default App;
