import React from "react";
import ReactDOM from "react-dom";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const pages = (
  <Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About me</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

ReactDOM.render(pages, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
