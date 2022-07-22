import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { handleAddPartTwo } from "../Redux/action";

import { useForm } from "react-hook-form";
import nollie from "../assets/images/PartTwoNollie.png";
import { partTwo } from "../data/Questions.js";
import { Input } from "@mui/material";

const PartTwo = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const partTwoState = useSelector((state) => state.partTwo);
  console.log("partTwoState", partTwoState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(handleAddPartTwo(data));
    history.push("/partThree");
  };

  const handleGoBack = () => {
    history.push("/partOne");
  };

  return (
    <>
      <div>
        <h3>Part II: Nollie the Robot</h3>
        <p>
          Nollie is a vacuum robot and must clean a 3x3 room, as shown in the
          image below. Nollie the robot can follow a series of moves to the dot.
          Those moves can be U, D, L or R, which moves Nollie north, south, west
          or east by one grid.
        </p>
        <img src={nollie} alt="" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>{partTwo.question}</label>
          <p>
            Choose the corresponding letter options of every program that
            succeeds.
          </p>
          <p>Clarifications:</p>
          <ul>
            <li>Grids are allowed to be cleaned multiple times.</li>
            <li>The starting square is already clean.</li>
            <li>Driving into a wall does nothing.</li>
            <li>Nollie will follow the moves left to right.</li>
            <li>Of A-E, there can be multiple correct programs.</li>
            <li>
              Please note you will get -1 for every wrong answer you pick, so
              please choose carefully!
            </li>
          </ul>
          {partTwo.answerOptions.map((option) => {
            return <label>{option}</label>;
          })}
          <Input
            defaultValue={
              partTwoState.questionOne ? partTwoState.questionOne : ""
            }
            {...register("questionOne")}
          ></Input>
          {errors.questionOne && <span>This field is required</span>}
        </div>{" "}
        <button type="submit">Next</button>
      </form>
      <button onClick={() => handleGoBack()}>Previous Page</button>
    </>
  );
};

export default PartTwo;
