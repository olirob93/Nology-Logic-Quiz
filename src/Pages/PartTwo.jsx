import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { handleAddPartTwo } from "../Redux/action";

import { useForm } from "react-hook-form";
import nollie from "../assets/images/PartTwoNollie.png";

const PartTwo = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const partTwoState = useSelector((state) => state.partTwo);

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
          <label>
            Q: (5) A program is a series of moves in order. You are considering
            5 different programs, A-E, that you could give Nollie. If Nollie
            started at the bottom left, which programs will make Nollie sweep
            every square of the room?
          </label>
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
          <select {...register("questionOne")}>
            <option value="UUDRDRUUL">
              {partTwoState.questionOne === "UUDRDRUUL"
                ? partTwoState.questionOne
                : "UUDRDRUUL"}
            </option>
            <option value="URURURDDLUULU">
              {partTwoState.questionOne === "URURURDDLUULU"
                ? partTwoState.questionOne
                : "URURURDDLUULU"}
            </option>
            <option value="UUDDRURUURDDLR">
              {partTwoState.questionOne === "UUDDRURUURDDLR"
                ? partTwoState.questionOne
                : "UUDDRURUURDDLR"}
            </option>
            <option value="URDRUULDLU">
              {partTwoState.questionOne === "URDRUULDLU"
                ? partTwoState.questionOne
                : "URDRUULDLU"}
            </option>
            <option value="UUDRDRUUU">
              {partTwoState.questionOne === "UUDRDRUUU"
                ? partTwoState.questionOne
                : "UUDRDRUUU"}
            </option>
          </select>
          {errors.questionOne && <span>This field is required</span>}
        </div>{" "}
        <button type="submit">Next</button>
      </form>
      <button onClick={handleGoBack}>Previous Page</button>
    </>
  );
};

export default PartTwo;
