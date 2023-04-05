import React from "react";
import Article from "./articles/Article";
import ArticlesList from "./articles/List";
import About from "./about/About";
import Matt from "./about/Matt";
import Apps from "./apps/List";
import NotFound from "./NotFound";
import { Route, Routes } from "react-router-dom";

interface RouterProps {
  openCreateArticleModal: () => void;
}

export default function Router({ openCreateArticleModal }: RouterProps) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ArticlesList openCreateArticleModal={openCreateArticleModal} />
        }
      ></Route>
      <Route path="/article/:slug" element={<Article />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/about/matt" element={<Matt />}></Route>
      <Route path="/apps" element={<Apps />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
