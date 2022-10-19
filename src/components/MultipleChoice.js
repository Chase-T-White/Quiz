const MultipleChoice = ({ correct_answer, incorrect_answers, checkAnswer }) => {
  let answersList = [...incorrect_answers];

  answersList.splice(Math.floor(Math.random() * 4), 0, correct_answer);

  console.log(answersList);

  return (
    <>
      {answersList.map((answer) => {
        return (
          <button
            key={Math.ceil(Math.random() * 1000000000000)}
            className='quiz__choice'
            value={answer}
            onClick={(e) => checkAnswer(e.target.value)}
          >
            {answer}
          </button>
        );
      })}
    </>
  );
};

export default MultipleChoice;
