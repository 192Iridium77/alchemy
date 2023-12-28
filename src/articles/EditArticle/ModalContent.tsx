import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Edit from "./Edit";

const ArticleTitle = styled.div`
  font-size: 1.875rem;
`;

interface CreateArticleContainerProps {
  isDesktop: boolean;
}

const CreateArticleContainer = styled.div<CreateArticleContainerProps>`
  padding: 1.5rem;
  ${({ isDesktop }) => {
    return isDesktop ? ` min-width: 500px; ` : "";
  }}
`;

interface ModalContentProps {
  articleId: string;
}

export default function ModalContent({ articleId }: ModalContentProps) {
  const isDesktop = useMediaQuery({ query: "(min-width: 1042px)" });

  return (
    <CreateArticleContainer isDesktop={isDesktop}>
      <ArticleTitle>Article Settings</ArticleTitle>
      {articleId ? <Edit articleId={articleId} /> : null}
    </CreateArticleContainer>
  );
}
