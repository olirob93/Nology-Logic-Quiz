import React from "react";
import { partOne } from "../data/Questions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { handleAddPartOne } from "../Redux/action";

import { useForm } from "react-hook-form";
import { Input } from "@mui/material";

const PartOne = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const partOneState = useSelector((state) => state.partOne);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(handleAddPartOne(data));
    history.push("/partTwo");
  };

  const handleGoBack = () => {
    history.push("/");
  };

  const questionsJsx = partOne.map((question) => {
    return (
      <div key={question.id}>
        <label> {question.question}</label>
        <img src={question.image} alt="" />
        {question.answerOptions ? (
          <select {...register(question.id)}>
            {question.answerOptions?.map((option) => (
              <option value={option}>
                {partOneState[question.id] ? partOneState[question.id] : option}
              </option>
            ))}
          </select>
        ) : (
          <Input
            defaultValue={
              partOneState[question.id] ? partOneState[question.id] : ""
            }
            {...register(question.id)}
          ></Input>
        )}
        {errors[question.id] && <span>This field is required</span>}
      </div>
    );
  });

  return (
    <>
      <div>
        <h3>Part I: Discover the pattern</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {questionsJsx} <button type="submit">Next Page</button>
      </form>
      <button onClick={handleGoBack}>Previous Page</button>
    </>
  );
};

export default PartOne;
