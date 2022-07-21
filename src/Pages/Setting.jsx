import React from "react";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { handleAddContactDetails } from "../Redux/action";

import { useForm } from "react-hook-form";

const Setting = ({ setStartTimer, startTimer }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const initialValues = useSelector((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setStartTimer(true);
    dispatch(handleAddContactDetails(data));
    history.push("/partOne");
  };

  return (
    <>
      <p>
        This quiz should be completed within in 30 minutes, once you click start
        a timer will start and regardless if you complete it in this time you
        will be locked.
      </p>
      <p>Please read the questions carefully</p>
      <p>
        If you are stuck it is better to have a look at another question and
        come back to it if you have time.
      </p>
      <p>The score for each question is in brackets next to it.</p>
      <p>Try to be exact with your answer – close answers won’t count!</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Full Name</label>
        <input
          defaultValue={initialValues.fullName ? initialValues.fullName : ""}
          {...register("fullName", { required: true })}
        />
        {errors.fullName && <span>This field is required</span>}

        <label>Email</label>
        <input
          defaultValue={initialValues.email ? initialValues.email : ""}
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}

        <button type="submit">
          {startTimer ? "Continue Quiz" : "Start Quiz"}{" "}
        </button>
      </form>
    </>
  );
};

export default Setting;
