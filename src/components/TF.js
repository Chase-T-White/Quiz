const TF = ({ checkAnswer, selectedAnswer, correct_answer, isChecked }) => {
  return (
    <div className='tf-box'>
      <button
        // className='quiz__choice'
        value={"True"}
        className={`${
          isChecked && "True" === correct_answer
            ? "quiz__choice correct"
            : "quiz__choice"
        } ${
          isChecked &&
          selectedAnswer === "True" &&
          selectedAnswer !== correct_answer
            ? "incorrect"
            : null
        }`}
        onClick={(e) => checkAnswer(e.target.value)}
      >
        True
      </button>
      <button
        value={"False"}
        className={`${
          isChecked && "False" === correct_answer
            ? "quiz__choice correct"
            : "quiz__choice"
        } ${
          isChecked &&
          selectedAnswer === "False" &&
          selectedAnswer !== correct_answer
            ? "incorrect"
            : null
        }`}
        onClick={(e) => checkAnswer(e.target.value)}
      >
        False
      </button>
    </div>
  );
};

export default TF;
