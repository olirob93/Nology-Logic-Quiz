import React from "react";
import { useHistory } from "react-router-dom";



import { useFormik } from 'formik'
import { useDispatch } from "react-redux";
import { handleAddContactDetails } from "../Redux/action";

const Setting = () => {

  const history = useHistory();
  const dispatch = useDispatch()


  const formik = useFormik({
    initialValues: { fullName: '', email: '' },
    validate: values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      // dispatch the values to redux
      dispatch(handleAddContactDetails(values));
      console.log(values, 'values')
    },
  })

  return (
    <>
      <p>
        This quiz should be completed within in 30 minutes, once you click start a timer will start and regardless if you complete it in this time you will be locked.
      </p>
      <p>
        Please read the questions carefully
      </p>
      <p>
        If you are stuck it is better to have a look at another question and come back to it if you have time.
      </p>
      <p>
        The score for each question is in brackets next to it.
      </p>
      <p>
        Try to be exact with your answer – close answers won’t count!
      </p>
      <form onSubmit={formik.handleSubmit}>
        <label> Full Name</label>
        <input
          type="fullName"
          name="fullName"
          onChange={formik.handleChange}
          value={formik.values.fullName}
        />
        {formik.errors.password && formik.touched.password && formik.errors.password}
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && formik.errors.email}
        <button type="submit">
          Start Quiz
        </button>
      </form>
    </>
  )
};

export default Setting;
