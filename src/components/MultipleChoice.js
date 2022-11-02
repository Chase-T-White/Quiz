const MultipleChoice = ({
  answersList,
  selectedAnswer,
  checkAnswer,
  correct_answer,
  isChecked,
}) => {
  return (
    <>
      {answersList.map((answer) => {
        return (
          <button
            key={Math.ceil(Math.random() * 1000000000000)}
            className={`${
              isChecked && answer === correct_answer
                ? "quiz__choice correct"
                : "quiz__choice"
            } ${
              isChecked &&
              selectedAnswer === answer &&
              selectedAnswer != correct_answer
                ? "incorrect"
                : null
            }`}
            value={answer}
            onClick={(e) => checkAnswer(e.target.value)}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        );
      })}
    </>
  );
};

export default MultipleChoice;
