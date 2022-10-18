import Loading from "../components/Loading";
import MultipleChoice from "../components/MultipleChoice";
import TF from "../components/TF";
import { useGlobalContext } from "../context";

const Quiz = () => {
  const { loading, questionType } = useGlobalContext();
  let correctTracker;
  let answerSelected = false;

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='page-center fd-column'>
      <h1 className='question__tracker'>Question 1</h1>
      <div className='quiz-container'>
        <p className='quiz__question'>
          The Axiom of Preventive Medicine states that people with ___ risk for
          a disease should be screened and we should treat ___ of those people.
        </p>
        <div className='quiz__choice-container flex fd-column'>
          {questionType === "multiple choice" ? <MultipleChoice /> : <TF />}
        </div>
        <button className='btn'>{!answerSelected ? "Check" : "Next"}</button>
      </div>
    </div>
  );
};

export default Quiz;
