const MultipleChoice = ({ correct_answer, incorrect_answers }) => {
  console.log(correct_answer, incorrect_answers);
  let answersList = incorrect_answers;

  answersList.splice(Math.floor(Math.random() * 4), 0, correct_answer);

  console.log(answersList);

  return (
    <>
      {answersList.map((answer) => {
        return (
          <button key={Math.ceil(Math.random() * 100)} className='quiz__choice'>
            {answer}
          </button>
        );
      })}
    </>
  );
};

export default MultipleChoice;
