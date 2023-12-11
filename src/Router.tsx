import React from "react";
import Article from "./articles/Article";
import ArticlesList from "./articles/List";
import About from "./about/About";
import Matt from "./about/Matt";
import Apps from "./apps/List";
import NotFound from "./NotFound";
import { Route, Routes, Navigate } from "react-router-dom";

interface RouterProps {
  openCreateArticleModal?: () => void;
  openEditArticleModal?: (data: any) => void;
}

export default function Router({
  openCreateArticleModal,
  openEditArticleModal,
}: RouterProps) {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/articles" />} />
      <Route path="/articles">
        <Route
          index
          element={
            // <ArticlesList openCreateArticleModal={openCreateArticleModal} />
            <ArticlesList />
          }
        />
        <Route
          path=":slug"
          element={
            // <Article openEditArticleModal={openEditArticleModal} />
            <Article />
          }
        ></Route>
      </Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/about/matt" element={<Matt />}></Route>
      <Route path="/apps" element={<Apps />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
