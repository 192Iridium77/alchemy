import React from "react";
import Article from "./articles/Article";
import ArticlesList from "./articles/List";
import Matt from "./about/Matt";
import Books from "./books/List";
import Apps from "./apps/List";
import NotFound from "./components/NotFound";
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
      <Route path="/" element={<Navigate replace to="/about" />} />
      <Route path="/about" element={<Matt />}></Route>
      <Route path="/articles">
        <Route
          index
          element={
            <ArticlesList openCreateArticleModal={openCreateArticleModal} />
          }
        />
        <Route
          path=":slug"
          element={<Article openEditArticleModal={openEditArticleModal} />}
        ></Route>
      </Route>
      <Route path="/books" element={<Books />}></Route>
      <Route path="/apps" element={<Apps />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
