import React from "react";
import { Formik } from "formik";
import styled from "styled-components";
import { Button } from "alchemy-tech-ui";
import { toast } from "react-toastify";

const FormContainer = styled(Formik)`
  margin-top: 1rem;
`;

const SignUpContainer = styled.div`
  padding: 1.5rem;
`;

interface SignUpProps {
  closeModal: () => void;
}

export default function SignUp({ closeModal }: SignUpProps) {
  return (
    <SignUpContainer>
      <div className="text-xl">Create Article</div>
      <FormContainer
        initialValues={{ title: "", slug: "", description: "", draft: true }}
        validate={(values) => {
          const errors: {
            title?: string;
            slug?: string;
            description?: string;
          } = {};

          if (!values.title) errors.title = "Required";
          if (!values.slug) errors.slug = "Required";
          if (!values.description) errors.description = "Required";

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          toast.success("Article Created Successfully", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          setSubmitting(false);
          closeModal();
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
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
            <input
              className="block p-4 border border-gray-200 w-full"
              type="text"
              name="title"
              placeholder="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <div className="text-red-600">
              {errors.title && touched.title && errors.title}
            </div>
            <input
              className="block p-4 border border-gray-200 w-full"
              type="text"
              name="slug"
              placeholder="slug"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.slug}
            />
            <div className="text-red-600">
              {errors.slug && touched.slug && errors.slug}
            </div>
            <textarea
              className="block p-4 border border-gray-200 w-full"
              name="description"
              placeholder="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            <div className="text-red-600">
              {errors.description && touched.description && errors.description}
            </div>
            <Button disabled={isSubmitting} text="Create" />
          </form>
        )}
      </FormContainer>
    </SignUpContainer>
  );
}
