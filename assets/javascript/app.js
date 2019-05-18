// Create a list of questions and answers as objects
var questions = [{
    question: "About how long does a turkey egg have to incubate before hatching?",
    answers: ["10 days", "12 days", "28 days", "34 days"],
    correctAnswer: "28 days",
    image: "assets/images/question_1.jpe",
}, {
    question: "What is the scientific term for a young turkey that has just hatched?",
    answers: ["baby", "chick", "fawn", "poult"],
    correctAnswer: "poult",
    image: "assets/images/question_2.jpe",
}, 
{
    question: "At what age is a turkey hen able to lay her first egg?",
    answers: ["5 months", "7 months", "9 months", "12 months"],
    correctAnswer: "7 months",
    image: "assets/images/question_3.jpe",
}, 
{
    question: "True or False: Turkeys are able to fly.",
    answers: ["true", "false"],
    correctAnswer: "true",
    image: "assets/images/question_4.jpe",
}, {
    question: "Turkeys eat fruits, berries, & seeds.  These items belong in which part of the food chain?",
    answers: ["producers", "primary consumers", "secondary consumers", "decomposers"],
    correctAnswer: "producers",
    image: "assets/images/question_5.jpe",
}, {
    question: "In a food chain, turkeys eat producers, so they would be classified as ________.",
    answers: ["producers", "decomposers", "secondary consumers", "primary consumers"],
    correctAnswer: "primary consumers",
    image: "assets/images/question_6.jpe",
}, {
    question: "In a food chain, which of the following would NOT be a secondary consumer of turkeys?",
    answers: ["humans", "turtles", "wolves", "coyotes"],
    correctAnswer: "turtles",
    image: "assets/images/question_7.jpe",
},  {
    question: "In which category of consumers do turkeys belong?",
    answers: ["herbivores", "omnivores", "carnivores",],
    correctAnswer: "omnivores",
    image: "assets/images/question_8.jpe",
},  {
    question: "Which would be a correct classification of a turkey?",
    answers: ["invertebrate", "marsupial", "vertebrate", "cold-blooded"],
    correctAnswer: "vertebrate",
    image: "assets/images/question_9.jpe",
},  {
    question: "Which of the following traits does NOT fit in the 'bird' classification?",
    answers: ["vertebrate", "hollow bones", "lay eggs", "produce milk"],
    correctAnswer: "28 days",
    image: "assets/images/question_10.jpe",
},  {
    question: "True or False: Turkeys will also consume insects and small reptiles along wih grass and berries.",
    answers: ["true", "false"],
    correctAnswer: "true",
    image: "assets/images/question_11.jpe",
},  {
    question: "What is the correct name for adolescent-aged male and female turkeys?",
    answers: ["johns & janets", "jakes & jennies", "toms & hens", "bobs & brendas"],
    correctAnswer: "jakes & jennies",
    image: "assets/images/question_12.jpe",
}, 
]

//push start to start game - start button will also have to disappear

$("#start").on('click', function() {
    $("#start").remove();
})

//questions will need to display, one at a time (for loop), with clickable answers.  
function showQuestion() {

}
//timer needs to countdown
function timer() {

}
//some sort of timed delay here - as per instructions -  before the next question displays
function nextQustion() {

}
//The user selected answer (.onclick event?) will need to be compared to the correct answer
function clicked() {

}
//the screen will need to change - correct or incorrect if statement
function results() {

}
//question timer will need to stop, question timer then reset (the reset might need to happen later?)
function timeUp() {

}
function correct() {

}

function incorrect() {

}

function reset() {

}


//end screen with results and gif


 


   // need a question timer
    // answer/question delay timer
    //for loop to loop through the questions
    //something to keep them from clicking more than one (onclick)
    //if then for 
    //empty/reset game function
    //start function - put in other elements of game play

// game play 