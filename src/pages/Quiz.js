import Loading from "../components/Loading";
import MultipleChoice from "../components/MultipleChoice";
import TF from "../components/TF";
import { useGlobalContext } from "../context";
import { Navigate } from "react-router-dom";

const Quiz = () => {
  const {
    quiz,
    loading,
    selectedAnswer,
    checkAnswer,
    index,
    isChecked,
    nextQuestion,
  } = useGlobalContext();

  if (!loading && quiz.length < 1) {
    return <Navigate to='/' />;
  }

  if (loading) {
    return <Loading />;
  }

  const { question, type, answersList, correct_answer } = quiz[index];

  return (
    <section>
      <div className='page-center fd-column'>
        <h1 className='question__tracker'>Question {index + 1}</h1>
        <div className='quiz-container'>
          <p
            className='quiz__question'
            dangerouslySetInnerHTML={{ __html: question }}
          />
          {isChecked ? (
            <p className='quiz__message'>
              {selectedAnswer === correct_answer ? "Correct!" : "Incorrect"}
            </p>
          ) : null}
          <div className='quiz__choice-container flex fd-column'>
            {type === "multiple" ? (
              <MultipleChoice
                answersList={answersList}
                selectedAnswer={selectedAnswer}
                checkAnswer={checkAnswer}
                correct_answer={correct_answer}
                isChecked={isChecked}
              />
            ) : (
              <TF
                selectedAnswer={selectedAnswer}
                checkAnswer={checkAnswer}
                correct_answer={correct_answer}
                isChecked={isChecked}
              />
            )}
          </div>
          {isChecked && (
            <button className='btn' onClick={nextQuestion}>
              {index + 1 !== quiz.length ? "Next" : "Results"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
  // };
};

export default Quiz;
