const MultipleChoice = ({ answersList, checkAnswer }) => {
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
