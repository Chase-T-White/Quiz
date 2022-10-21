import {
  SET_LOADING,
  SET_QUIZ,
  BUILD_QUERY,
  SET_CORRECT_TRACKER,
  SET_ISCHECKED,
  NEXT_QUESTION,
  RESET,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case BUILD_QUERY:
      return {
        ...state,
        query: {
          amount: action.payload.amount,
          category:
            action.payload.category === "any"
              ? ""
              : `&category=${action.payload.category}`,
          difficulty:
            action.payload.difficulty === "any"
              ? ""
              : `&difficulty=${action.payload.difficulty}`,
          type:
            action.payload.type === "any" ? "" : `&type=${action.payload.type}`,
        },
      };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_QUIZ:
      return { ...state, loading: false, quiz: action.payload };
    case SET_CORRECT_TRACKER:
      return {
        ...state,
        isChecked: true,
        correctTracker: action.payload + 1,
      };
    case SET_ISCHECKED:
      return { ...state, isChecked: true };
    case NEXT_QUESTION:
      return { ...state, isChecked: false, index: action.payload + 1 };
    case RESET:
      return {
        loading: true,
        query: {
          category: "",
          difficulty: "",
          type: "",
          amount: 10,
        },
        quiz: [],
        isChecked: false,
        correctTracker: 0,
        index: 0,
        isResults: false,
      };
    default:
      throw new Error(`No matching "${action.type}" action type`);
  }
};

export default reducer;
