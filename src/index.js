import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigation from "./Navigation/index";
import Home from "./Home";
import Article from "./Articles/Article";
// import NotFound from "./NotFound";
import Footer from "./Footer";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <BrowserRouter>
      <Route path="/" exact component={Home}></Route>
      <Route path="/article/:id" component={Article}></Route>
      {/* <Route component={NotFound}></Route> */}
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
