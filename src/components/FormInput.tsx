import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { FormikErrors, FormikTouched } from "formik";

interface InputProps {
  label: string;
  required?: boolean;
  name: string;
  placeholder: string;
  onChange: (e: ChangeEvent<any>) => void;
  onBlur: (e: ChangeEvent<any>) => void;
  value: string;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  errors?: string | FormikErrors<any> | string[] | FormikErrors<any>[];
  loading?: boolean;
}

const InputContainer = styled.div<{ isError: boolean }>`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  input {
    padding: 16px;
    border: 1px solid ${({ isError }) => (isError ? "red" : "#ccc")};
    width: 100%;
  }
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Error = styled.div`
  color: red;
  margin-top: 8px;
`;

function FormInput({
  label,
  required,
  name,
  placeholder,
  onChange,
  onBlur,
  value,
  touched,
  errors,
  loading = false,
}: InputProps) {
  const isError = !!touched && !!errors;
  const isRequired = !!required;

  return (
    <InputContainer isError={!loading && isError}>
      <Label htmlFor={name}>{label}</Label>
      <input
        id={name}
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        required={isRequired}
        disabled={loading}
      />
      {!loading && isError && <Error>{errors}</Error>}
    </InputContainer>
  );
}

export default FormInput;
