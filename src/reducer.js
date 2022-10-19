import {
  SET_LOADING,
  SET_QUIZ,
  SET_QUESTION_TYPE,
  BUILD_QUERY,
  BUILD_QUIZ_QUESTION,
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
    // case BUILD_QUIZ_Question:
    //   if (state.quiz[0] === 'multiple choice') {
    //     let choices = payload.
    //     return {...state, quizQuestion: {'correctAnswer': payload.correct_answer, quizChoices: } }
    //   }
    //   return {...state, quizQuestion: {'correctAnswer': payload.correct_answer};

    default:
      throw new Error(`No matching "${action.type}" action type`);
  }
};

export default reducer;

// const initialState = {
//   loading: true,
//   questionType: "",
//   query: {
//     category: "",
//     difficulty: "",
//     type: "",
//     numberOfQuestions: 10,
//   },
//   quiz: [],
//   quizQuestion: {},
//   isResults: false,
// };

// const initialState = {
//   loading: true,
//   questionType: "",
//   query: {
//     category: "",
//     difficulty: "",
//     type: "",
//     numberOfQuestions: 10,
//   },
//   quiz: { correctAnswer: "", quizChoices: [] },
//   isResults: false,
// };
