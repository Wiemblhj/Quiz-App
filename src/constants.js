export const jsQuizz = {
    questions: [
      {
        question: "Which of the following is used in React.js to increase performance?",
        choices: [
          "Virtual DOM",
          "Original DOM",
          "Both A and B",
          "None of the above"
        ],
        type: "MCQs",
        correctAnswer: "Virtual DOM",
      },
      {
        question: "What is the purpose of the 'use strict' directive in JavaScript?",
        choices: [
          "To enforce a specific coding style",
          "To enable strict mode for enhanced debugging",
          "To restrict the use of certain keywords",
          "To make the code execute faster"
        ],
        type: "MCQs",
        correctAnswer: "To enable strict mode for enhanced debugging",
      },
      {
        question: "What is the result of the expression '3' + 2 in JavaScript?",
        choices: [
          "5",
          "32",
          "7",
          "NaN"
        ],
        type: "MCQs",
        correctAnswer: "32",
      },
      {
        question: "Which array method is used to add new elements to the end of an array?",
        choices: [
          "push()",
          "append()",
          "addToEnd()",
          "concat()"
        ],
        type: "MCQs",
        correctAnswer: "push()",
      },
      
    ],
  };
export const resultInitialState ={
   
  score :0,
  correctAnswers:0,
  wrongAnswers :0

};