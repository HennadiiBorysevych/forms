import { TextInput } from "../../atoms";
import styles from "./UserInfoForm.module.css";
import { useFormik, FormikValues } from "formik";
import { object, string } from "yup";

const userInfoFormInputs = [
  { name: "firstName", placeholder: "First Name", type: "text" },
  { name: "lastName", placeholder: "Last Name", type: "text" },
  { name: "email", placeholder: "E-mail", type: "email" },
  { name: "phone", placeholder: "Phone", type: "phone" },
  { name: "password", placeholder: "Password", type: "password" }
];

const UserFormSchema = object({
  firstName: string()
    .required("First name is required")
    .min(3, "First name should be at least 3 characters")
    .max(20, "First name should not exceed 20 characters")
    .nullable(),
  lastName: string()
    .required("Last name is required")
    .min(3, "Last name should be at least 3 characters")
    .max(20, "Last name should not exceed 20 characters")
    .nullable(),
  email: string()
    .email("Invalid email address")
    .required("Email is required")
    .min(6, "Email should be at least 6 characters")
    .max(30, "Email should not exceed 30 characters")
    .nullable(),
  phone: string()
    .matches(
      /^[+]?[0-9]+$/,
      "Invalid phone number format: Example +191 000 000"
    )
    .min(12, "Phone number should be at least 12 characters")
    .max(15, "Phone number should not exceed 15 characters")
    .required("Phone number is required"),
  password: string()
    .min(8, "Password should be at least 8 characters")
    .max(20, "Password should not exceed 20 characters")
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/,
      "Invalid password format. It should contain at least one digit, one special character, and one uppercase letter."
    )
    .required("Password is required")
});

const UserInfoForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: ""
    },
    validationSchema: UserFormSchema,
    onSubmit: ({
      firstName,
      lastName,
      email,
      phone,
      password
    }: FormikValues) => {
      console.log(firstName, lastName, email, phone, password);
    }
  });
  return (
    <div className={styles.user_info_section}>
      <div className={styles.user_image_wrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          viewBox="0 0 253 226"
          fill="none"
        >
          <path
            d="M150.186 98.6335C154.854 98.6335 159.418 97.3969 163.299 95.08C167.181 92.7631 170.206 89.47 171.992 85.6172C173.779 81.7644 174.246 77.5248 173.336 73.4346C172.425 69.3445 170.177 65.5874 166.876 62.6386C163.575 59.6898 159.369 57.6816 154.791 56.868C150.212 56.0544 145.466 56.472 141.154 58.0679C136.841 59.6638 133.154 62.3663 130.561 65.8338C127.967 69.3013 126.583 73.3779 126.583 77.5482C126.583 83.1404 129.07 88.5035 133.496 92.4578C137.923 96.412 143.926 98.6335 150.186 98.6335ZM150.186 70.5197C151.742 70.5197 153.263 70.9319 154.557 71.7042C155.851 72.4765 156.859 73.5742 157.455 74.8585C158.05 76.1428 158.206 77.556 157.903 78.9194C157.599 80.2828 156.85 81.5351 155.749 82.518C154.649 83.501 153.247 84.1704 151.721 84.4416C150.195 84.7128 148.613 84.5736 147.175 84.0416C145.738 83.5097 144.509 82.6088 143.644 81.453C142.78 80.2972 142.318 78.9383 142.318 77.5482C142.318 75.6841 143.147 73.8964 144.623 72.5783C146.098 71.2602 148.099 70.5197 150.186 70.5197Z"
            fill="black"
          />
          <path
            d="M205.26 28.3491H47.9058C43.7325 28.3491 39.7302 29.83 36.7792 32.4662C33.8282 35.1024 32.1704 38.6778 32.1704 42.406V182.975C32.1704 186.703 33.8282 190.278 36.7792 192.915C39.7302 195.551 43.7325 197.032 47.9058 197.032H205.26C209.433 197.032 213.435 195.551 216.386 192.915C219.337 190.278 220.995 186.703 220.995 182.975V42.406C220.995 38.6778 219.337 35.1024 216.386 32.4662C213.435 29.83 209.433 28.3491 205.26 28.3491ZM205.26 182.975H47.9058V140.804L87.2442 105.662L131.225 144.951C134.173 147.569 138.161 149.039 142.318 149.039C146.475 149.039 150.463 147.569 153.412 144.951L165.921 133.776L205.26 168.918V182.975ZM205.26 149.028L177.015 123.795C174.066 121.177 170.078 119.708 165.921 119.708C161.764 119.708 157.776 121.177 154.828 123.795L142.318 134.971L98.3377 95.6816C95.3895 93.0635 91.4013 91.594 87.2442 91.594C83.0872 91.594 79.099 93.0635 76.1508 95.6816L47.9058 120.914V42.406H205.26V149.028Z"
            fill="black"
          />
        </svg>
        <button className={styles.image_change_button}>Change</button>
      </div>
      <form className={styles.user_info_form} onSubmit={formik.handleSubmit}>
        {userInfoFormInputs.map((input, i) => (
          <label key={i}>
            <TextInput {...input} formik={formik} />
          </label>
        ))}
        <button type="submit" className={styles.image_change_button}>
          Edit/Save changes
        </button>
      </form>
    </div>
  );
};

export default UserInfoForm;
