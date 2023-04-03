import React from "react";
import Article from "./articles/Article";
import ArticlesList from "./articles/List";
import About from "./about/About";
import Matt from "./about/Matt";
import Apps from "./apps/List";
import NotFound from "./NotFound";
import { Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<ArticlesList />}></Route>
      <Route path="/article/:slug" element={<Article />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/about/matt" element={<Matt />}></Route>
      <Route path="/apps" element={<Apps />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
