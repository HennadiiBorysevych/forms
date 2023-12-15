import React from "react";
import { FormikValues } from "formik";
import styles from "./TextInput.module.css";

type TextInputProps = {
  formik: {
    values: FormikValues;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    // setFieldValue: FormikHelpers<FormikValues>["setFieldValue"];
  };
  name: string;
  placeholder: string;
  type: string;
};

const TextInput: React.FC<TextInputProps> = ({
  formik,
  name,
  placeholder,
  type,
}) => {
  return (
    <input
      className={styles.text_input}
      type={type}
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
