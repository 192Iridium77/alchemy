import React from "react";
import { Formik } from "formik";
import styled from "styled-components";
import { signUp } from "../../services/auth/auth.service";
import { Button } from "alchemy-tech-ui";
import { toast } from "react-toastify";

const FormContainer = styled(Formik)`
  margin-top: 1rem;
`;

const SignUpContainer = styled.div`
  padding: 1.5rem;
`;

interface SignUpProps {
  onCloseModal: () => void;
}

export default function SignUp({ onCloseModal }: SignUpProps) {
  return (
    <SignUpContainer>
      <div className="text-xl">Sign Up</div>
      <div className="mt-8">
        {/* Welcome to my portfolio! To get started, please fill out the quick and
        easy signup form below. By becoming a member, you'll have access to
        exclusive content, resources, and opportunities to collaborate with
        like-minded individuals.

         */}
        Work in progress! This is admin only.
      </div>

      <FormContainer
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: { email?: string } = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          await signUp({ email: values.email, password: values.password });
          toast.success(
            "Congratulations! You have successfully signed up. Please use the login button to login.",
            {
              position: toast.POSITION.BOTTOM_RIGHT,
            }
          );
          setSubmitting(false);
          onCloseModal();
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
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <div className="text-red-600">
              {errors.email && touched.email && errors.email}
            </div>
            <input
              className="block p-4 border border-gray-200 w-full"
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <div className="text-red-600">
              {errors.password && touched.password && errors.password}
            </div>
            <Button disabled={isSubmitting} text="Submit"></Button>
          </form>
        )}
      </FormContainer>
    </SignUpContainer>
  );
}
