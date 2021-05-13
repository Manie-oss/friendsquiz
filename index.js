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
        answer: "b"
    },
    {
        question: `2. What’s the name of the grumpy person who works at the coffee shop? 

    a. Herman
    b. Gunther
    c. Frasier
    d. Eddie

`,
        answer: "b"
    },
    {
        question: `3. What are Ross and Monica’s parents called? 
  
    a. Jack and Jill
    b. Philip and Holly
    c. Jack and Judy
    d. Margaret and Peter

`,
        answer: "c"
    },
    {
        question: `4. Monica briefly dates billionaire Pete Becker. Which country does he take her for their first date?

    a. France
    b. Italy
    c. England
    d. Greece

`,
        answer: "b"
    },
    {
        question: `5. What’s the name of Joey’s penguin?
  
    a. Snowflake
    b. Waddle
    c. Huggsy
    d. Bobber

`,
        answer: "c"
    },

    {
        question: `6.  What song is Phoebe best known for?

  a. Smelly Cat
  b. Smelly Dog
  c. Smelly Rabbit
  d. Smelly Worm

`,
        answer: "a"
    },

    {
        question: `7.  What job does Ross have?

  a. Paleontologist
  b. Artist
  c. Photographer
  d. Insurance salesman

`,
        answer: "a"
    },

    {
        question: `8. What does Joey never share?

  a. His books
  b. His information
  c. His food
  d. His DVDs

`,
        answer: "c"
    },

    {
        question: `9. What is Chandler’s middle name?

  a. Muriel
  b. Jason
  c. Kim
  d. Zachary

`,
        answer: "a"
    },

    {
        question: `10. What is Janice most likely to say?

  a. Talk to the hand!
  b. Get me a coffee!
  c. Oh… my… God!
  d. No way!

`,
        answer: "c"
    }
];



function myGame(question, answer) {
    var ans = readlineSync.question(question);
    if (ans === answer) {
        console.log("right!");
        score++;
        console.log("your current score is: ", score)
        console.log("_________________________________________________________");
        console.log(" ");
    } else {
        console.log("Wrong!");
        console.log("_________________________________________________________");
        console.log(" ");
    }
}

console.log("Answer these questions to know how much do you know about Friends.");

for (var i = 0; i < mySelf.length; i++) {
    myGame(mySelf[i].question, mySelf[i].answer);
}

console.log(" ");

console.log("your total score is: ", score);