import { FormikErrors, FormikTouched } from "formik";
import React from "react";
import styled from "styled-components";
import { colors, spacing } from "alchemy-tech-ui";

type TextAreaProps = {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  loading?: boolean;
};

const TextAreaLabel = styled.label`
  font-weight: bold;
  margin-top: ${spacing(4)};
`;

const TextArea = styled.textarea<Partial<TextAreaProps>>`
  display: block;
  padding: 1rem;
  border: 1px solid
    ${({ error, touched, loading }) =>
      !loading && error && touched ? "red" : colors.gray[200]};
  width: 100%;
  &:focus {
    outline: none;
    border-color: ${({ loading, error, touched }) =>
      !loading && error && touched ? "red" : "blue"};
  }
`;

export default function TextAreaComponent(props: TextAreaProps) {
  const {
    name,
    label,
    placeholder,
    value,
    onChange,
    onBlur,
    error,
    touched,
    loading,
  } = props;
  return (
    <>
      <TextAreaLabel>{label}</TextAreaLabel>
      <TextArea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        touched={touched}
        disabled={loading}
      />
      {!loading && error && touched && (
        <div style={{ color: "red" }}>{error}</div>
      )}
    </>
  );
}
