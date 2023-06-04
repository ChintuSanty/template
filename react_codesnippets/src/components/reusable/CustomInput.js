import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CustomInput = ({ label, minLength, value, required, textColor, backgroundColor }) => {
  const validationSchema = Yup.object().shape({
    [label]: Yup.string()
      .min(minLength, `Must be at least ${minLength} characters`)
      .required(required ? 'Required' : ''),
  });

  const formik = useFormik({
    initialValues: {
      [label]: value || '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor={label} style={{ color: textColor, backgroundColor: backgroundColor }}>
        {label}
      </label>
      <input
        id={label}
        name={label}
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[label]}
        style={{ color: textColor, backgroundColor: backgroundColor }}
      />
      {formik.touched[label] && formik.errors[label] ? (
        <div>{formik.errors[label]}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomInput;
