import questions from "./questions.json" assert { type: "json" };

export const quizCheck = (guess, quizNumber) => {
  const quizQuestions = questions.questions[quizNumber];
  const answers = quizQuestions.answers;
  let feedback = "Sorry, wrong answer! Try again next time";

  answers.map((answer) => {
    // console.log(answer.correct);
    if (answer.answer.toLowerCase() === guess.toLowerCase()) {
      console.log(answer.correct);
      feedback = "Right answer!";
    } else {
      feedback = "Sorry, wrong answer! Try again next time";
    }
  });
  // console.log(feedback);
  return feedback;
};
