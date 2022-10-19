const TF = ({ checkAnswer }) => {
  return (
    <div className='tf-box flex'>
      <button
        className='quiz__choice'
        value={"True"}
        onClick={(e) => checkAnswer(e.target.value)}
      >
        True
      </button>
      <button
        className='quiz__choice'
        value={"False"}
        onClick={(e) => checkAnswer(e.target.value)}
      >
        False
      </button>
    </div>
  );
};

export default TF;
