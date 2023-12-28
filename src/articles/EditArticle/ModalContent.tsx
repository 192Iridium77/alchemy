import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Tabs from "../../components/Tabs";
import Tab from "../../components/Tab";
import Edit from "./Edit";
import SelectImage from "./SelectImage";
import GenerateArticle from "./GenerateArticle";

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
  data: any;
}

export default function ModalContent({ data }: ModalContentProps) {
  const isDesktop = useMediaQuery({ query: "(min-width: 1042px)" });
  const { articleId } = data;

  return (
    <CreateArticleContainer isDesktop={isDesktop}>
      <ArticleTitle>Edit Article</ArticleTitle>
      <Tabs>
        <Tab label="Edit">
          {articleId ? <Edit articleId={articleId} /> : null}
        </Tab>
        <Tab label="Generate">
          {articleId ? <GenerateArticle articleId={articleId} /> : null}
        </Tab>
        <Tab label="Image">
          <SelectImage articleId={articleId} />
        </Tab>
      </Tabs>
    </CreateArticleContainer>
  );
}
