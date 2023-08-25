const readlineSync = require("readline-sync");

const chalk = require("chalk");

let score = 0;

let highScores = [{
  name : "Himanshu",
  score : 5
}]

function welcome(){
  let userName = readlineSync.question("What is your name? ");
  readlineSync.question("welcome "+chalk.blue.bold(userName)+", Do you know Himanshu Mishra? ");
}

let questions = [
  {
    question : "Where do himanshu live currently? ",
    answer : "pune"
  },
  {
    question : "Who is himanshu's favorite marvel superhero? ",
    answer : "hulk"
  },
  {
    question : "Where do himanshu work currently? ",
    answer : "iifl"
  },
  {
    question : "Which is himanshu's fav IPL team? ",
    answer : "mi"
  },
  {
    question : "Which hollywood movie character he look like? ",
    answer : "harry potter"
  }
] 

function play(question, answer) {
  let userAnswer = readlineSync.question(question);
  
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("Right"));
    score += 1;
  }else{
    console.log(chalk.red("Wrong"));
  }

  console.log("Current score : ",score);
  console.log("-----------------------");
}



function game() {
  for(let i=0; i<questions.length; i++) {
    let currQue = questions[i];
    play(currQue.question, currQue.answer);
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

    console.log("-----------------------");

  console.log(chalk.yellow("Check out the high scores, if you should be there ping me and I'll update it"));

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
