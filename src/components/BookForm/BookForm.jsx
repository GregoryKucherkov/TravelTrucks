import { ErrorMessage, Field, Formik, Form } from "formik";

import css from "./BookForm.module.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Button from "../Button/Button";
import "react-datepicker/dist/react-datepicker.css";

const initialValues = {
  name: "",
  email: "",
  bookingDate: null,
  comment: "",
};
const BookForm = () => {
  const [startDate, setStartDate] = useState(null);

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    setStartDate(null);
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
        // validationSchema={FormValidSchema}
      >
        {({ setFieldValue }) => (
          <Form className={css.form}>
            <Field
              className={css.field}
              type="text"
              name="name"
              placeholder="Name*"
            />
            <ErrorMessage name="name" component="span" />

            <Field
              className={css.field}
              type="email"
              name="email"
              placeholder="Email*"
            />
            <ErrorMessage name="email" component="span" />

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
            <ErrorMessage name="bookingDate" component="span" />

            <Field
              as="textarea"
              cols="20"
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
