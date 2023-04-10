import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import GenerateArticle from "./GenerateArticle";
import { spacing } from "alchemy-tech-ui";

const ArticleTitle = styled.div`
  font-size: 1.875rem;
`;

interface CreateArticleContainerProps {
  isDesktop: boolean;
}

const FormContainer = styled.div`
  margin-top: ${spacing(4)};
`;

const CreateArticleContainer = styled.div<CreateArticleContainerProps>`
  padding: 1.5rem;
  ${({ isDesktop }) => {
    return isDesktop ? ` min-width: 500px; ` : "";
  }}
`;

interface ModalContentProps {
  closeModal: () => void;
}

export default function ModalContent({ closeModal }: ModalContentProps) {
  const isDesktop = useMediaQuery({ query: "(min-width: 1042px)" });

  return (
    <CreateArticleContainer isDesktop={isDesktop}>
      <ArticleTitle>Create Article</ArticleTitle>
      <FormContainer>
        <GenerateArticle closeModal={closeModal} />
      </FormContainer>
    </CreateArticleContainer>
  );
}
