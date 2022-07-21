import {
  ADD_CONTACT_DETAILS,
  ADD_PART_1,
  ADD_PART_2,
  ADD_PART_3,
} from "./actionTypes";

export const handleAddContactDetails = (payload) => ({
  type: ADD_CONTACT_DETAILS,
  payload,
});
export const handleAddPartOne = (payload) => ({
  type: ADD_PART_1,
  payload,
});

export const handleAddPartTwo = (payload) => ({
  type: ADD_PART_2,
  payload,
});

export const handleAddPartThree = (payload) => ({
  type: ADD_PART_3,
  payload,
});
