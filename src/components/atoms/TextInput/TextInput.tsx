import React, { ReactNode } from "react";
import { FormikValues, FormikErrors, FormikTouched } from "formik";
import styles from "./TextInput.module.css";

type TextInputProps = {
  formik: {
    values: FormikValues;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errors: FormikErrors<FormikValues>;
    touched: FormikTouched<FormikValues>;
  };
  name: string;
  placeholder: string;
  type: string;
};

const TextInput: React.FC<TextInputProps> = ({
  formik,
  name,
  placeholder,
  type
}) => {
  const { handleChange, values, errors, touched } = formik;

  const isError = touched[name] && errors[name];

  return (
    <div>
      <input
        className={`${styles.text_input} ${isError ? styles.error_border : ""}`}
        type={type}
        name={name}
        value={values[name]}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {touched[name] && errors[name] && (
        <p className={styles.error_message}>{errors[name] as ReactNode}</p>
      )}
    </div>
  );
};

export default TextInput;
