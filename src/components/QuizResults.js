import { Link } from "react-router-dom";

const score = Math.ceil(Math.random() * 100);

const QuizResults = () => {
  let message;

  if (score === 0) {
    message = "You don't know shit";
  } else if (score <= 50) {
    message = "For the meat grinder";
  } else if (score <= 75) {
    message = "How many forks have you stuck in the socket?";
  } else if (score <= 95) {
    message = "I bet all that trivia knowledge gets you laid...";
  } else if (score === 100) {
    message =
      "Nice. You just had to use Google to cheat my shitty little quiz game. Proud of yourself?";
  } else {
    message = "Bees?";
  }

  return (
    <section>
      <div className='container center'>
        <div className='page-center'>
          <div className='results text-container flex fd-column'>
            <h5 className='results__title'>Results</h5>
            <h4 className='results__msg'>{message}</h4>
            <p className='results__score'>{score}</p>
            <Link to='/' className='btn'>
              Continue
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizResults;
