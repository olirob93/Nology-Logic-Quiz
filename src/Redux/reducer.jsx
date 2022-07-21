import {
  ADD_CONTACT_DETAILS,
  ADD_PART_1,
  ADD_PART_2,
  ADD_PART_3,
} from "./actionTypes";

const initialState = {
  fullName: "",
  email: "",
  partOne: {
    questionOne: "",
    questionTwo: "",
    questionThree: "",
  },
  partTwo: {
    questionOne: "",
  },
  partThree: {
    questionOne: "",
    questionTwo: "",
    questionThree: "",
    questionFour: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT_DETAILS:
      return {
        ...state,
        fullName: action.payload.fullName,
        email: action.payload.email,
      };
    case ADD_PART_1:
      return {
        ...state,
        partOne: {
          questionOne: action.payload.questionOne,
          questionTwo: action.payload.questionTwo,
          questionThree: action.payload.questionThree,
        },
      };
    case ADD_PART_2:
      return {
        ...state,
        partTwo: {
          questionOne: action.payload.questionOne,
        },
      };
    case ADD_PART_3:
      return {
        ...state,
        partThree: {
          questionOne: action.payload.questionOne,
          questionTwo: action.payload.questionTwo,
          questionThree: action.payload.questionThree,
          questionFour: action.payload.questionFour,
        },
      };
    default:
      return state;
  }
};

export default reducer;
