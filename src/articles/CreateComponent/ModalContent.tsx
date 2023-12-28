import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Button, spacing } from "alchemy-tech-ui";
import { Formik } from "formik";
import { toast } from "react-toastify";
import articlesService from "../articles.service";

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
  articleId: string;
}

const StyledFormik = styled(Formik)`
  margin-top: ${spacing(4)};
`;

export default function ModalContent({
  articleId,
  closeModal,
}: ModalContentProps) {
  const isDesktop = useMediaQuery({ query: "(min-width: 1042px)" });

  return (
    <CreateArticleContainer isDesktop={isDesktop}>
      <ArticleTitle>Create Article</ArticleTitle>
      <FormContainer>
        <StyledFormik
          initialValues={{}}
          validate={(values) => {
            return {};
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await articlesService.createComponent(articleId, "");
              toast.success("Component created successfully");
            } catch (err) {
              toast.error("An unknown error occured");
            }
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              Markdown Editor Here
              <Button disabled={isSubmitting}>Save</Button>
            </form>
          )}
        </StyledFormik>
      </FormContainer>
    </CreateArticleContainer>
  );
}
