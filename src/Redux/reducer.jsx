import {
ADD_CONTACT_DETAILS,
ADD_PART_1
} from "./actionTypes";

const initialState = {
  fullName : '',
  email: '',
  partOne : {
    questionOne: '',
    questionTwo: '',
    questionThree: ''
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT_DETAILS:
      return {
        ...state,
        fullName: action.payload.fullName,
        email: action.payload.email
      };
    // case CHANGE_DIFFICULTY:
    //   return {
    //     ...state,
    //     question_difficulty: action.payload,
    //   };
    // case CHANGE_TYPE:
    //   return {
    //     ...state,
    //     question_type: action.payload,
    //   };
    // case CHANGE_AMOUNT:
    //   return {
    //     ...state,
    //     amount_of_question: action.payload,
    //   };
    // case CHANGE_SCORE:
      // return {
      //   ...state,
      //   score: action.payload,
      // };
    default:
      return state;
  }
};

export default reducer;
