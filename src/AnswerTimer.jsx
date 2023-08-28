import React, { useEffect  } from "react";

function AnswerTimer({ showResult, timer, setTimer,  onClickNext }) {
  
  useEffect(() => {
    let interval;

    if (!showResult) {
      interval = setInterval(() => {
        if (timer > 0) {
          setTimer(timer - 1);
        } else {
          clearInterval(interval);
       
          onClickNext();
        }
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [timer, showResult, setTimer, onClickNext]);
  return (
    <div className="timer-container">
      <div
        className="timer"
        style={{
          color:
            timer >= 7
              ? "#77dd77" // Green
              : timer >= 4
              ? "#ffa500" // Orange
              : "#ff6b6b", // Red
        }}
      >
        <div className="timer-icon">🕒</div>
        <div className="timer-text">{timer}s</div>
      </div>
    </div>
  );
  
}

export default AnswerTimer;
