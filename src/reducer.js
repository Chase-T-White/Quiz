import {
  SET_LOADING,
  SET_QUIZ,
  BUILD_QUERY,
  SET_CORRECT_TRACKER,
  SET_ISCHECKED,
  NEXT_QUESTION,
  SET_RESULTS,
  RESET,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case BUILD_QUERY:
      return {
        ...state,
        loading: true,
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
        correctTracker: action.payload[0] + 1,
        selectedAnswer: action.payload[1],
      };
    case SET_ISCHECKED:
      if (!action.payload) {
        action.payload = null;
      }
      return { ...state, isChecked: true, selectedAnswer: action.payload };
    case NEXT_QUESTION:
      return {
        ...state,
        isChecked: false,
        index: action.payload + 1,
        selectedAnswer: null,
      };
    case SET_RESULTS:
      return { ...state, isResults: true };
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
