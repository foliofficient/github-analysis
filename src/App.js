import React from "react";
import { Link, Router } from "@reach/router";

import "./App.css";
import CryptoDashboard from "./cryptos/CryptoDashboard";
import Logo from "./Logo";
import Home from "./Home";
import { ALL_CRYPTO } from "./PathConstants";

function App() {
  return (
    <div>
      <Logo />
      <nav>
        <Link to="/">Home</Link>
        {ALL_CRYPTO.map((crypto, key) => {
          return (
            <>
              {" "}
              <Link id={key} to={`/dashboard/${crypto.path}`}>
                {crypto.linkName}
              </Link>
            </>
          );
        })}
      </nav>
      <Router>
        <CryptoDashboard path="/dashboard/:key" />
        <Home default />
      </Router>
    </div>
  );
}

export default App;
