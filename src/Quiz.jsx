import { useState } from "react";
import {resultInitialState} from './constants'
import AnswerTimer from "./AnswerTimer";


const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result , setResult]=useState(resultInitialState)
  const [showResult, setshowResult] = useState(false)
  const [timer, setTimer] = useState(10);

  const { question, choices, correctAnswer } = questions[currentQuestion];

  const onAnswerClick = (answer, index) => {
    setAnswerIndex(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };
  const onClickNext =()=>{
    setAnswerIndex(null);
    setResult((prev)=>
    answer?
    {
        ...prev,
        score : prev.score +5,
        correctAnswers:prev.correctAnswers+1 ,

    }:
    { ...prev ,
         wrongAnswers :prev.wrongAnswers+1}
    );
    setTimer(10);

    if (currentQuestion !== questions.length-1){
        setCurrentQuestion((prev)=>prev+1)
    }
    else {
        setCurrentQuestion(0);
        setshowResult(true);
    }

  };

  const onTryAgain=()=>{
   setResult(resultInitialState);
   setshowResult(false);

  }

  return (
    <div className="quiz-container"> {!showResult ? (<><AnswerTimer
      showResult={showResult}
            timer={timer}
            setTimer={setTimer}
            onClickNext={onClickNext}
    /> <div>
         <div className="circle"></div>
  <div className="heart"></div>
        <span className="question-counter">{currentQuestion + 1} </span>
        <span className="total-question">/{questions.length} </span>
        <h2 className="question">{question}</h2>
        <ul className="choices">
          {choices.map((answer, index) => (
            <li
              key={answer}
              onClick={() => onAnswerClick(answer, index)}
              className={answerIndex === index ? "selected-answer" : null}
            >
              {answer}
            </li>
          ))}
        </ul>
      <div className="footer">

     <button
     onClick={onClickNext}  disabled ={answerIndex === null}
     >
        {currentQuestion === questions.length-1? "Finish" : "Next"}
     </button>

      </div>
      </div></> ):<div className="result">
        
        <h3>
        Result
        </h3>
         <p>
            Total Questions: <span> {questions.length}</span>
         </p>
         <p>
            Total Score: <span> {result.score}</span>
         </p> <p>
            Correct Answers: <span className="correct-answer"> {result.correctAnswers}</span>
         </p> <p>
           Wrong Answers: <span className="wrong-answer"> {result.wrongAnswers}</span>
         </p>
        <button className="try-again" onClick={onTryAgain} >Try again</button>
        
        </div>}

      
    </div>
  );
};

export default Quiz;
