import { ErrorMessage, Field, Formik, Form } from "formik";

import css from "./BookForm.module.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Button from "../Button/Button";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import toast from "react-hot-toast";

const initialValues = {
  name: "",
  email: "",
  bookingDate: null,
  comment: "",
};

const FormValidSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Email is required"),
  bookingDate: Yup.date().nullable().required("Booking date is required"),
});

const BookForm = () => {
  const [startDate, setStartDate] = useState(null);

  const handleSubmit = (values, actions) => {
    try {
      //sending logic
      console.log(values);
      toast.success("Booking successful!");
      actions.resetForm();
    } catch (e) {
      toast.error(`Error: ${e.message || "Something went wrong!"}`);
    } finally {
      setStartDate(null);
    }
  };

  return (
    <div className={css.formContainer}>
      <h3>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FormValidSchema}
      >
        {({ setFieldValue }) => (
          <Form className={css.form}>
            <Field
              className={css.field}
              type="text"
              name="name"
              placeholder="Name*"
            />
            <ErrorMessage name="name" component="span" className={css.error} />

            <Field
              className={css.field}
              type="email"
              name="email"
              placeholder="Email*"
            />
            <ErrorMessage name="email" component="span" className={css.error} />

            <Field name="bookingDate">
              {({ field }) => (
                <DatePicker
                  className={css.dateForm}
                  {...field}
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    setFieldValue("bookingDate", date); // Set Formik field value
                  }}
                  placeholderText="Booking date*"
                  fixedHeight
                />
              )}
            </Field>
            <ErrorMessage
              name="bookingDate"
              component="span"
              className={css.error}
            />

            <Field
              as="textarea"
              rows="5"
              className={`${css.field} ${css.texarea}`}
              name="comment"
              placeholder="Comment"
            />
            <ErrorMessage name="comment" component="span" />
            <Button addClass="btn" text="Send" type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookForm;
