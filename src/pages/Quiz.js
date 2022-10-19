import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import MultipleChoice from "../components/MultipleChoice";
import TF from "../components/TF";
import { useGlobalContext } from "../context";

const Quiz = () => {
  const { quiz, loading } = useGlobalContext();

  const [index, setIndex] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [correctTracker, setCorrectTracker] = useState(0);

  const checkAnswer = (selectedAnswer) => {
    if (selectedAnswer === quiz[index].correct_answer) {
      setCorrectTracker(correctTracker + 1);
    }
    return setIsChecked(true);
  };

  const nextQuestion = () => {
    setIsChecked(false);
    return setIndex(index + 1);
  };

  // useEffect(() => {
  //   if (!index) {
  //     return;
  //   }
  // }, [index]);

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
            <MultipleChoice {...quiz[index]} checkAnswer={checkAnswer} />
          ) : (
            <TF checkAnswer={checkAnswer} />
          )}
        </div>
        {isChecked && (
          <button className='btn' onClick={nextQuestion}>
            Next
          </button>
        )}
      </div>
    </div>
  );
  // };
};

export default Quiz;
