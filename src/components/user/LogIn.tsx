import React from "react";
import { Formik } from "formik";
import styled from "styled-components";
import { getLoggedInUser, logIn } from "../../services/auth/auth.service";
import { Button } from "alchemy-tech-ui";
import { toast } from "react-toastify";
import useAuthContext from "../../context/useAuthContext";

const FormContainer = styled(Formik)`
  margin-top: 1rem;
`;

const LogInContainer = styled.div`
  padding: 1.5rem;
`;

interface LogInProps {
  closeModal: () => void;
}

export default function LogIn({ closeModal }: LogInProps) {
  const { setUser } = useAuthContext();
  return (
    <LogInContainer>
      <div className="text-xl">Log In</div>
      <div className="mt-8">Welcome to Alchemy Tech!</div>

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
          try {
            await logIn({ email: values.email, password: values.password });
            const user = await getLoggedInUser();
            setUser(user);
            toast.success("You have successfully logged in.", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
            closeModal();
          } catch (error) {
            toast.error("Something went wrong.", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
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
    </LogInContainer>
  );
}
