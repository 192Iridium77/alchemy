import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigation from "./Navigation/index";
import Home from "./Home";
import Article from "./Articles/Article";
import About from "./About/About";
import Apps from "./Apps/List";
import NotFound from "./NotFound";
import Footer from "./Footer";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/article/:slug" component={Article}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/apps" component={Apps}></Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
