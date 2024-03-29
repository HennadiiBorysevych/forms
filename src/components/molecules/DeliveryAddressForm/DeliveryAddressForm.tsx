import { useFormik, FormikValues } from "formik";
import { object, string } from "yup";

import styles from "./DeliveryAddressForm.module.css";
import { TextInput } from "../../atoms";

const deliveryAddressFormInputs = [
  {
    name: "addressTitle",
    placeholder: "Address Title (Nick name)",
    type: "text"
  },
  { name: "city", placeholder: "City", type: "text" },
  { name: "street", placeholder: "Street Address", type: "email" },
  { name: "houseNumber", placeholder: "House Number", type: "number" },
  { name: "unit", placeholder: "Unit", type: "number" },
  { name: "flat", placeholder: "Flat Number", type: "number" }
];

const DeliveryAddressFormSchema = object({
  addressTitle: string().required("Address title is required"),
  city: string().required("City is required"),
  street: string().required("Street is required"),
  houseNumber: string().required("House number is required"),
  unit: string().required("Unit number is required"),
  flat: string().required("Flat number is required")
});

const DeliveryAddressForm = () => {
  const formik = useFormik({
    initialValues: {
      addressTitle: "",
      city: "",
      street: "",
      houseNumber: "",
      unit: "",
      flat: ""
    },
    validationSchema: DeliveryAddressFormSchema,
    onSubmit: ({
      addressTitle,
      city,
      street,
      houseNumber,
      unit,
      flat
    }: FormikValues) => {
      console.log(addressTitle, city, street, houseNumber, unit, flat);
    }
  });

  return (
    <div className={styles.delivery_address_section}>
      <button className={styles.delivery_address_button}>
        Add Delivery Address
      </button>
      <form onSubmit={formik.handleSubmit} className={styles.delivery_form}>
        {deliveryAddressFormInputs.slice(0, 3).map((input, i) => (
          <label key={i}>
            <TextInput {...input} formik={formik} />
          </label>
        ))}
        <div className={styles.bulding_address_wrapper}>
          {deliveryAddressFormInputs.slice(3).map((input, i) => (
            <label className={styles.delivery_address_label} key={i}>
              <TextInput {...input} formik={formik} />
            </label>
          ))}
        </div>
        <button type="submit" className={styles.delivery_address_button}>
          Edit / Save changes
        </button>
      </form>
    </div>
  );
};

export default DeliveryAddressForm;
