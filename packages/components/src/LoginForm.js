import React, { Component } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import Yup from "yup";

const VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Required"),
  password: Yup.string()
    .min(4, "Too short")
    .required("Required")
});

const transformMyApiErrors = error => ({
  email: "api-error"
});

export default class LoginForm extends Component {
  static propTypes = {
    onLoginSuccess: PropTypes.func.isRequired,
    onLoginError: PropTypes.func.isRequred
  };

  onSubmit = (values, { setSubmitting, setErrors }) =>
    fetch("an url", {
      body: JSON.stringify(values),
      method: "POST"
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(response => {
        setSubmitting(false);
        this.props.onLoginSuccess();
      })
      .catch(error => {
        setSubmitting(false);
        setErrors(transformMyApiErrors(error));
        this.props.onLoginError();
      });

  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={VALIDATION_SCHEMA}
        onSubmit={this.onSubmit}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.email && errors.email && <div>{errors.email}</div>}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {touched.password &&
              errors.password && <div>{errors.password}</div>}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      />
    );
  }
}
