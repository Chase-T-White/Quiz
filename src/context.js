import React, { useRef, useEffect, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import reducer from "./reducer";
import {
  SET_LOADING,
  SET_QUIZ,
  SET_QUESTION_TYPE,
  BUILD_QUERY,
  BUILD_QUIZ_QUESTION,
} from "./actions";

const url = "https://opentdb.com/api.php?amount=";

const initialState = {
  loading: true,
  query: {
    category: "",
    difficulty: "",
    type: "",
    amount: 10,
  },
  quiz: [],
  quizQuestion: {},
  isResults: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const notInitialRender = useRef(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    dispatch({ type: SET_LOADING, payload: true });
    try {
      const response = await fetch(
        `${url}${state.query.amount}${state.query.category}${state.query.difficulty}${state.query.type}`
      );
      const data = await response.json();
      console.log(data.results);
      dispatch({ type: SET_QUIZ, payload: data.results });
      navigate("/quiz");
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
  }, [state.query]);

  const handleSubmit = (e) => {
    e.preventDefault();
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

  return (
    <AppContext.Provider value={{ ...state, handleSubmit }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
