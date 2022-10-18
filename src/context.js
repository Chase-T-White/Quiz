import React, { useState, useEffect, useContext, useReducer } from "react";
import reducer from "./reducer";
import {
  SET_LOADING,
  SET_QUIZ,
  SET_QUESTION_TYPE,
  BUILD_QUERY,
  BUILD_QUIZ_QUESTION,
} from "./actions";

const url = "https://opentdb.com/api.php?";

const tempURL = "https://opentdb.com/api.php?amount=10&category=17";

const initialState = {
  loading: true,
  questionType: "multiple choice",
  query: {
    category: "",
    difficulty: "",
    type: "",
    numberOfQuestions: 10,
  },
  quiz: [],
  quizQuestion: {},
  isResults: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: SET_LOADING, payload: true });
    try {
      const response = await fetch(`${tempURL}`);
      const data = await response.json();
      console.log(data.results);
      dispatch({ type: SET_QUIZ, payload: data.results });
    } catch (error) {
      console.error();
      dispatch({ type: SET_LOADING, payload: false });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
