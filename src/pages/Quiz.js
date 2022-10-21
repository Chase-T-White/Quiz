import Loading from "../components/Loading";
import MultipleChoice from "../components/MultipleChoice";
import TF from "../components/TF";
import { useGlobalContext } from "../context";

const Quiz = () => {
  const { quiz, loading, checkAnswer, index, isChecked, nextQuestion } =
    useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  const { question, type, answersList } = quiz[index];

  return (
    <div className='page-center fd-column'>
      <h1 className='question__tracker'>Question {index + 1}</h1>
      <div className='quiz-container'>
        <p className='quiz__question'>{question}</p>
        <div className='quiz__choice-container flex fd-column'>
          {type === "multiple" ? (
            <MultipleChoice
              answersList={answersList}
              checkAnswer={checkAnswer}
            />
          ) : (
            <TF checkAnswer={checkAnswer} />
          )}
        </div>
        {isChecked && (
          <button className='btn' onClick={nextQuestion}>
            {index + 1 !== quiz.length ? "Next" : "Results"}
          </button>
        )}
      </div>
    </div>
  );
  // };
};

export default Quiz;
