import React from "react";
import { partThree } from "../data/Questions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { handleAddPartThree } from "../Redux/action";
import partThreeExample from "../assets/images/PartThreeExample.png";
import partThreeMain from "../assets/images/PartThreeMain.jfif";

import { useForm } from "react-hook-form";

const PartThree = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const partThreeState = useSelector((state) => state.partThree);
  console.log(partThreeState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(handleAddPartThree(data));
    history.push("/final");
  };

  const handleGoBack = () => {
    history.push("/partTwo");
  };

  const questionsJsx = partThree.map((question) => {
    return (
      <div key={question.id}>
        <label> {question.question}</label>
        <img src={question.image} alt="" />
        <select {...register(question.id)}>
          {question.answerOptions?.map((option) => (
            <option value={option}>
              {partThreeState[question.id]
                ? partThreeState[question.id]
                : option}
            </option>
          ))}
        </select>
        {errors[question.id] && <span>This field is required</span>}
      </div>
    );
  });

  return (
    <>
      <div>
        <h3>Part III:Part III: Late presents - Brief</h3>
        <p>
          <strong>*Recommended to take notes here*</strong>
        </p>

        <p>
          Due to Covid 19 restrictions, Santa fell way behind on deliveries and
          enlisted you for help at the North Pole fulfilment center.{" "}
        </p>

        <p>Elves are working in groups to sort the presents.</p>
        <p>Every present has 2 attributes – shape and number.</p>
        <p>Shape can be one of triangle, square, or circle.</p>
        <p>Number can be either 1, 2 or 3.</p>
        <p>So, there are 9 types of presents as seen in the diagram below.</p>
        <p>
          Each group of elves must sort their stream of presents, which could be
          of any type. They start with every type of present.
        </p>
        <p>
          The presents ultimately end up either in a sack or are discarded. The
          presents all go to a single elf first. Each elf picks features about
          the presents and then separates presents based on those features.
        </p>
        <p>
          After separating, the elf passes the presents down the chain, in two
          streams. There are 3 possible routes the presents take once they've
          been sorted by an elf: they could go to another elf who will further
          divide the presents; or they will end up in a sack; or will they will
          be discarded entirely.{" "}
        </p>
      </div>

      <div>
        <h3>Part III: Late presents - Example</h3>
        <p>
          Below are 3 examples. On the left of each example, we see a diagram
          showing all the presents that would end up in a the sack based on that
          example.
        </p>
        <ol>
          <li>
            In the top left, the lone head elf will put all the triangles
            (regardless of number) into the only sack. Note: an empty shape is a
            shorthand for a shape present of any number.
          </li>
          <li>
            In the top right, we see the first elf keeps triangles with all
            numbers in it, but the second elf only keeps the triangles with the
            number 1. So triangles with 2 & 3 must have been discarded. The
            diagram shows only triangles with number 1 in the sack.
          </li>
          <li>
            In the last example, we see the first elf keeps the #2 of any shape
            into one sack, and passes everything else to the next elf. The
            second elf discards triangles and circles, and keeps squares of any
            number in the sack. Note: a number on it's own is a shorthand for a
            number encompassing all shapes. Note: the diagram’s shorthand
            represents the #2 square twice: once as a square and again as a #2.
            But that is OK.
          </li>
        </ol>
        <img src={partThreeExample} alt="" />
      </div>
      <div>
        <h3>Part III: Late presents - Questions</h3>
        <img src={partThreeMain} alt="" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {questionsJsx} <button type="submit">Next Page</button>
      </form>
      <button onClick={handleGoBack}>Previous Page</button>
    </>
  );
};

export default PartThree;
