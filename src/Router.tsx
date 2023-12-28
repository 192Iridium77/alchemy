import React from "react";
import Article from "./articles/Article";
import ArticlesList from "./articles/List";
import Matt from "./about/Matt";
import Books from "./books/List";
import Apps from "./apps/List";
import NotFound from "./components/NotFound";
import { Route, Routes, Navigate } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/about" />} />
      <Route path="/about" element={<Matt />}></Route>
      <Route path="/articles">
        <Route index element={<ArticlesList />} />
        <Route path=":slug" element={<Article />}></Route>
      </Route>
      <Route path="/books" element={<Books />}></Route>
      <Route path="/apps" element={<Apps />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
