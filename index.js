var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your name? ");

var score = 0;

var mySelf = [{
  question: `1. What is Monica skilled at?

    a. Bricklaying
    b. Cooking
    c. American football
    d. Singing

`,
  answer: "Cooking"
},
{
  question: `2. What’s the name of the grumpy person who works at the coffee shop? 

    a. Herman
    b. Gunther
    c. Frasier
    d. Eddie

`,
  answer: "Gunther"
},
{
  question: `3. What are Ross and Monica’s parents called? 
  
    a. Jack and Jill
    b. Philip and Holly
    c. Jack and Judy
    d. Margaret and Peter

`,
  answer: "Jack and Judy"
},
{
  question: `4. Monica briefly dates billionaire Pete Becker. Which country does he take her for their first date?

    a. France
    b. Italy
    c. England
    d. Greece

`,
  answer: "Italy"
},
{
  question: `5. What’s the name of Joey’s penguin?
  
    a. Snowflake
    b. Waddle
    c. Huggsy
    d. Bobber

`,
  answer: "Huggsy"
}];



function myGame(question, answer){
  var ans = readlineSync.question(question);
  if(ans === answer)
  {
    console.log("right!");
    score++;
    console.log("your current score is: ",score)
    console.log("___________");
  }else{
    console.log("Wrong!");
    console.log("___________");
  }
} 

console.log("Answer these questions to know how much do you know about Friends.");

for(var i = 0; i < mySelf.length; i++)
{
  myGame(mySelf[i].question, mySelf[i].answer);
}

console.log("your total score is: ", score);