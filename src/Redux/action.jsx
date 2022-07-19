import {
ADD_CONTACT_DETAILS,
ADD_PART_1
} from "./actionTypes";

export const handleAddContactDetails = (payload) => ({
  type: ADD_CONTACT_DETAILS,
  payload,
});
export const handleAddPartOne = (payload) => ({
  type: ADD_PART_1,
  payload,
});
