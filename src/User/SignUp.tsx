import React from "react";
import { Formik } from "formik";
import styled from "styled-components";
import { signUp } from "../services/auth";

const FormContainer = styled(Formik)`
  margin-top: 1rem;
`;

export default function SignUp() {
  return (
    <div className="p-8">
      <div className="text-xl">Sign Up</div>
      {/* <button onClick={closeModal}>close</button> */}
      <div className="mt-8">
        Welcome to Alchemy Tech! To get started, please fill out the quick and
        easy signup form below. By becoming a member, you'll have access to
        exclusive content, resources, and opportunities to collaborate with
        like-minded individuals.
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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            await signUp({ username: values.email, password: values.password });
            setSubmitting(false);
          }, 400);
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
            <button
              type="submit"
              disabled={isSubmitting}
              className="block border border-black p-4"
            >
              Submit
            </button>
          </form>
        )}
      </FormContainer>
    </div>
  );
}
