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
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/article/:slug" element={<Article />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/apps" element={<Apps />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
