import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import MultipleChoice from "../components/MultipleChoice";
import TF from "../components/TF";
import { useGlobalContext } from "../context";

const Quiz = () => {
  const { quiz } = useGlobalContext();
  const [index, setIndex] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [correctTracker, setCorrectTracker] = useState(0);
  const { loading, questionType } = useGlobalContext();

  const checkAnswer = (value) => {};

  // const quizQuestion = () => {
  if (loading) {
    return <Loading />;
  }

  const { question, type } = quiz[index];

  return (
    <div className='page-center fd-column'>
      <h1 className='question__tracker'>Question {index + 1}</h1>
      <div className='quiz-container'>
        <p className='quiz__question'>{question}</p>
        <div className='quiz__choice-container flex fd-column'>
          {type === "multiple" ? (
            <MultipleChoice {...quiz[index]} />
          ) : (
            <TF {...quiz[index]} />
          )}
        </div>
        {isChecked && <button className='btn'>"Next"</button>}
      </div>
    </div>
  );
  // };
};

export default Quiz;
