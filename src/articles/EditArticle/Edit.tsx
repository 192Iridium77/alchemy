import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";
import articlesService from "../articles.service";
import { spacing, Button } from "alchemy-tech-ui";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FormTextArea from "../../components/FormTextArea";
import FormInput from "../../components/FormInput";
import FormCheckBox from "../../components/CheckBox";
import { Article } from "../article.types";
import useFetchArticle from "../useFetchArticle";
import Loading from "../../components/Loading";
import useAuthContext from "../../context/useAuthContext";

const FormContainer = styled(Formik)`
  margin-top: ${spacing(4)};
`;

interface Props {
  articleId: string;
  closeModal: () => void;
}

export default function CreateArticleForm({ articleId, closeModal }: Props) {
  const navigate = useNavigate();
  const { isAdmin } = useAuthContext();
  const { article, loadingArticle } = useFetchArticle({ articleId });
  const [initialValues, setInitialValues] = useState<Partial<Article>>();

  useEffect(() => {
    setInitialValues(article);
  }, [article]);

  const navToArticle = (slug: string) => {
    navigate(`/article/${slug}`);
  };

  if (!article || loadingArticle || !initialValues) return <Loading />;

  return (
    <FormContainer
      initialValues={initialValues}
      validate={(values) => {
        const errors: {
          title?: string;
          slug?: string;
          description?: string;
          selectedImageId?: string;
        } = {};

        if (!values.title) errors.title = "Required";
        if (!values.slug) errors.slug = "Required";
        if (!values.description) errors.description = "Required";

        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await articlesService.updateArticle(article.id, values);
          toast.success("Article saved successfully");
          navToArticle(values.slug);
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
          <FormInput
            label="Title"
            name="title"
            placeholder="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            touched={touched.title}
            errors={errors.title}
          />

          <FormInput
            label="Author"
            name="author"
            placeholder="author"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.author}
            touched={touched.author}
            errors={errors.author}
          />

          <FormInput
            label="Slug"
            name="slug"
            placeholder="slug"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.slug}
            touched={touched.slug}
            errors={errors.slug}
          />

          <FormTextArea
            name="description"
            label="Description"
            placeholder="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
            error={errors.description}
            touched={touched.description}
          />

          {isAdmin() ? (
            <FormCheckBox
              name="published"
              label="published"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.published}
              errors={errors.published}
              touched={touched.published}
            />
          ) : null}

          <Button disabled={isSubmitting} text="Save" />
        </form>
      )}
    </FormContainer>
  );
}
