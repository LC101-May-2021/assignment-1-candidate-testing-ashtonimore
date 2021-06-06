const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ('');
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = ("");
let questions = [ 'Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ', 'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2? ', 'What is the minimum crew size for the ISS? ' ];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = '';

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name? ");
 console.log(`Welcome ${candidateName}!`);
}
// console.log(questions[0])
let rightAnswers = 0;
let wrongAnswers = 0;
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  for (let i = 0; i < questions.length; i++) {
  candidateAnswers = input.question(`${i + 1}) ${questions[i]}`)
    if (candidateAnswers === correctAnswers[i]) {
      rightAnswers = rightAnswers + 1;
      console.log(`Your answer: ${candidateAnswers} \nCorrect Answer: ${correctAnswers[i]}`);
      } else {
        wrongAnswers = wrongAnswers + 1;
        (console.log(`Your answer: ${candidateAnswers} \nCorrect Answer: ${correctAnswers[i]}`));
      }
  }
}
let grade = 0
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
/*if (candidateAnswer === correctAnswer) {
  console.log("That's correct!");
}   else {
      console.log("That's incorrect.");
}*/

  
  grade = rightAnswers/5*100;
  console.log(`Your score: ${grade}% (${rightAnswers}/5)`);
  if (grade >= 80){
    console.log("You passed. Hooray!");
  } else {console.log("You failed. Please try again.");
      
  }
  return grade;
  
  
}
//console.log(grade)
function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  askQuestion();
  gradeQuiz(this.candidateAnswers);
  
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
