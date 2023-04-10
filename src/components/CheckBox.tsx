import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { FormikErrors, FormikTouched } from "formik";

interface CheckboxProps {
  label: string;
  required?: boolean;
  name: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  errors?: string | FormikErrors<any> | string[] | FormikErrors<any>[];
  loading?: boolean;
}

const CheckboxContainer = styled.div<{ isError: boolean }>`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  input[type="checkbox"] {
    margin-right: 8px;
  }

  label {
    margin-bottom: 8px;
  }

  span {
    color: red;
    margin-top: 8px;
  }
`;

function FormCheckBox({
  label,
  required,
  name,
  checked,
  onChange,
  onBlur,
  touched,
  errors,
  loading = false,
}: CheckboxProps) {
  const isError = !!touched && !!errors;
  const isRequired = !!required;

  return (
    <CheckboxContainer isError={!loading && isError}>
      <label htmlFor={name}>
        <input
          id={name}
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          required={isRequired}
          disabled={loading}
        />
        {label}
      </label>
      {!loading && isError && <span>{errors}</span>}
    </CheckboxContainer>
  );
}

export default FormCheckBox;
