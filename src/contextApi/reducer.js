import strings from "../utils/constant/stringConstant";

export const reducer = (state, action) => {
  switch (action.type) {
    case strings.LOG_IN:
      return { ...state, user: action.payload }


    default:
      return state;
  }
};
