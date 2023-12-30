import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Button, spacing } from "alchemy-tech-ui";
import { Formik } from "formik";
import { toast } from "react-toastify";
import MDEditor from "@uiw/react-md-editor";

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
  handleComponentCreated: (
    articleId: string,
    text: string,
    componentOrder: number
  ) => void;
  articleId: string;
  componentOrder: number;
}

const StyledFormik = styled(Formik)`
  margin-top: ${spacing(4)};
`;

export default function ModalContent({
  articleId,
  closeModal,
  componentOrder,
  handleComponentCreated,
}: ModalContentProps) {
  const isDesktop = useMediaQuery({ query: "(min-width: 1042px)" });
  const [selectedComponentType, setSelectedComponentType] =
    useState<string>("markdown");
  const [copy, setCopy] = useState<string>("");

  const handleComponentTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedComponentType(event.target.value);
  };
  const handleCopyChange = (
    value?: string | undefined,
    event?: React.ChangeEvent<HTMLTextAreaElement> | undefined
  ) => {
    console.log("🚀 ~ file: Index.tsx:51 ~ handleCopyChange ~ val:", value);
    setCopy(value || "");
  };

  return (
    <CreateArticleContainer isDesktop={isDesktop}>
      <ArticleTitle>Add Component</ArticleTitle>
      <FormContainer>
        <StyledFormik
          initialValues={{}}
          validate={(values) => {
            return {};
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              // TODO pass in componentOrder
              handleComponentCreated(articleId, copy, componentOrder);
              toast.success("Component created successfully");
            } catch (err) {
              toast.error("An unknown error occured");
            } finally {
              setSubmitting(false);
              closeModal();
            }
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
              <label htmlFor="component-type">Select a component type</label>
              <select
                id="component-type"
                className="border border-gray-200 p-4"
                onChange={handleComponentTypeChange}
              >
                <option value="markdown">Markdown</option>
              </select>

              {
                // this will need to be a switch later
                selectedComponentType === "markdown" ? (
                  <MDEditor value={copy} onChange={handleCopyChange} />
                ) : null
              }

              <Button disabled={isSubmitting}>Add</Button>
            </form>
          )}
        </StyledFormik>
      </FormContainer>
    </CreateArticleContainer>
  );
}
