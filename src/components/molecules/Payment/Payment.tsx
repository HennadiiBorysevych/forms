import { useFormik, FormikValues } from "formik";
import { object, string } from "yup";

import styles from "./Payment.module.css";
import { TextInput } from "../../atoms";

const paymentFormInputs = [
  {
    name: "addressTitle",
    placeholder: "My main card",
    type: "text",
    label: "Card Title"
  },
  {
    name: "cardNumber",
    placeholder: "1234 5678 9012 3456",
    type: "number",
    label: "Card Number"
  },
  {
    name: "cardholder",
    placeholder: "Ex. John Doe",
    type: "text",
    label: "Name on card"
  },
  { name: "cvvNumber", placeholder: "***", type: "number", label: "CVV/CVC" }
];

const cardExpirationDate = [
  {
    name: "month",
    placeholder: "Month",
    type: "select",
    label: "Card Title"
  },
  {
    name: "year",
    placeholder: "Year",
    type: "select",
    label: "Card Title"
  }
];

const PaymentSchema = object({
  addressTitle: string().required("Address title is required"),
  cardNumber: string()
    .matches(/^\d{16}$/, "Card number must be a 16-digit number")
    .required("Card number is required"),
  cardholder: string().required("Cardholder name is required"),
  cvvNumber: string()
    .matches(/^\d{3}$/, "CVV must be a 3-digit number")
    .required("CVV is required"),
  month: string().required("Expiration month is required"),
  year: string().required("Expiration year is required")
});

const Payment = () => {
  const formik = useFormik({
    initialValues: {
      addressTitle: "",
      cardNumber: "",
      cardholder: "",
      cvvNumber: "",
      month: "",
      year: ""
    },
    validationSchema: PaymentSchema,
    onSubmit: ({
      addressTitle,
      cardNumber,
      cardholder,
      cvvNumber,
      month,
      year
    }: FormikValues) => {
      console.log(addressTitle, cardNumber, cardholder, cvvNumber, month, year);
    }
  });
  return (
    <div>
      <button className={styles.add_payment_button}>Add payment card</button>
      <form
        onSubmit={formik.handleSubmit}
        className={styles.delivery_address_from}
      >
        {paymentFormInputs.map((input, i) => (
          <div key={i} className={styles.payment_input_wrapper}>
            <label>{input.label}</label>
            <TextInput {...input} formik={formik} />
          </div>
        ))}
        <div className={styles.payment_input_wrapper}>
          <label>Expire date</label>
          {cardExpirationDate.map((input) => (
            <TextInput formik={formik} {...input} key={input.name} />
          ))}
        </div>
        <button type="submit" className={styles.add_payment_button}>
          Edit / Save changes
        </button>
      </form>
    </div>
  );
};

export default Payment;
