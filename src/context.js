import React, { useRef, useEffect, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import reducer from "./reducer";
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

const url = "https://opentdb.com/api.php?amount=";

const initialState = {
  loading: false,
  query: {
    category: "",
    difficulty: "",
    type: "",
    amount: 10,
  },
  quiz: [],
  selectedAnswer: null,
  isChecked: false,
  correctTracker: 0,
  index: 0,
  isResults: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const notInitialRender = useRef(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${url}${state.query.amount}${state.query.category}${state.query.difficulty}${state.query.type}`
      );
      const data = await response.json();
      const newData = [...data.results].map((entry) => {
        let answers = [...entry.incorrect_answers];
        answers.splice(Math.floor(Math.random() * 4), 0, entry.correct_answer);
        entry.answersList = answers;
        return entry;
      });
      dispatch({ type: SET_QUIZ, payload: newData });
    } catch (error) {
      console.error();
      dispatch({ type: SET_LOADING, payload: false });
    }
  };

  useEffect(() => {
    if (notInitialRender.current) {
      fetchData();
    } else {
      notInitialRender.current = true;
    }
    // eslint-disable-next-line
  }, [state.query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/quiz");
    return dispatch({
      type: BUILD_QUERY,
      payload: {
        amount: e.target[0].value,
        category: e.target[1].value,
        difficulty: e.target[2].value,
        type: e.target[3].value,
      },
    });
  };

  const checkAnswer = (selectAnswer) => {
    if (selectAnswer === state.quiz[state.index].correct_answer) {
      dispatch({
        type: SET_CORRECT_TRACKER,
        payload: [state.correctTracker, selectAnswer],
      });
    }
    return dispatch({ type: SET_ISCHECKED, payload: selectAnswer });
  };

  const nextQuestion = () => {
    if (state.index + 1 < state.quiz.length) {
      return dispatch({ type: NEXT_QUESTION, payload: state.index });
    } else {
      dispatch({ type: SET_RESULTS });
      navigate("/results");
    }
  };

  const resetState = () => {
    notInitialRender.current = false;
    return dispatch({ type: RESET });
  };

  return (
    <AppContext.Provider
      value={{ ...state, handleSubmit, checkAnswer, nextQuestion, resetState }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
