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
// {
//     question: "True or False: Turkeys are able to fly.",
//     answers: ["true", "false"],
//     correctAnswer: "true",
//     image: "assets/images/question_4.jpe",
// }, {
//     question: "Turkeys eat fruits, berries, & seeds.  These items belong in which part of the food chain?",
//     answers: ["producers", "primary consumers", "secondary consumers", "decomposers"],
//     correctAnswer: "producers",
//     image: "assets/images/question_5.jpe",
// }, {
//     question: "In a food chain, turkeys eat producers, so they would be classified as ________.",
//     answers: ["producers", "decomposers", "secondary consumers", "primary consumers"],
//     correctAnswer: "primary consumers",
//     image: "assets/images/question_6.jpe",
// }, {
//     question: "In a food chain, which of the following would NOT be a secondary consumer of turkeys?",
//     answers: ["humans", "turtles", "wolves", "coyotes"],
//     correctAnswer: "turtles",
//     image: "assets/images/question_7.jpe",
// },  {
//     question: "In which category of consumers do turkeys belong?",
//     answers: ["herbivores", "omnivores", "carnivores",],
//     correctAnswer: "omnivores",
//     image: "assets/images/question_8.jpe",
// },  {
//     question: "Which would be a correct classification of a turkey?",
//     answers: ["invertebrate", "marsupial", "vertebrate", "cold-blooded"],
//     correctAnswer: "vertebrate",
//     image: "assets/images/question_9.jpe",
// },  {
//     question: "Which of the following traits does NOT fit in the 'bird' classification?",
//     answers: ["vertebrate", "hollow bones", "lay eggs", "produce milk"],
//     correctAnswer: "28 days",
//     image: "assets/images/question_10.jpe",
// },  {
//     question: "True or False: Turkeys will also consume insects and small reptiles along wih grass and berries.",
//     answers: ["true", "false"],
//     correctAnswer: "true",
//     image: "assets/images/question_11.jpe",
// },  {
//     question: "What is the correct name for adolescent-aged male and female turkeys?",
//     answers: ["johns & janets", "jakes & jennies", "toms & hens", "bobs & brendas"],
//     correctAnswer: "jakes & jennies",
//     image: "assets/images/question_12.jpe",
// }, 
]

//push start to start game - start button will also have to disappear

$("#start").on('click', function() {
    $("#start").remove();
    game.showQuestion();
});

//click event for buttons at e - event user input
$(document).on('click', 'answer-button', function(e) {
    game.clicked(e);
});

var game = {
    questions: questions,
    currentQuestion:0,
    counter:0,
    correct:0,
    incorrect:0,
    unanswered:0,

    //timer needs to countdown
    countdown: function() {
        game.counter--;
        $("#counter").html(game.counter);

        if (game.counter<=0) {
            console.log("Time's UP!!");
            game.timeUp();
        };
    },

    //questions will need to display, one at a time (for loop), with clickable answers.  
    showQuestion: function() {
        timer = setInterval(game.countdown, 1000);
        $("#contentWrap").html('<h2>' + questions[game.currentQuestion].question + '</h2>');

        for (var i=0; i<questions[game.currentQuestion].answers.length; i++) {
            console.log(`answers${i}`, questions[game.currentQuestion].answers[i]);
            
            $('#contentWrap').append('<button class="answer-button" id="button-' +i+ '"data-name="' +questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');
        }
    },

    //some sort of timed delay here - as per instructions -  before the next question displays
    nextQuestion: function() {
        game.counter = 30;
        $('#counter').html(game.counter);
        game.currentQuestion++;
        game.showQuestion();
    },

    //The user selected answer (.onclick event?) will need to be compared to the correct answer
    clicked: function(e) {
        clearInterval(timer);
        if ($(e.target).data("name")==questions[game.currentQuestion].correctAnswer) {
            game.correctAnswer();            
        }else {
            game.incorrectAnswer();
        }
    },

    //display something if correct
    correctAnswer: function() {
        console.log("You got it!");
        clearInterval(timer);
        game.correct++;
        $("#contentWrap").html('<h2>Gobble Gobble! You Got It!</h2>');

        if (game.currentQuestion==questions.length-1) {
            setTimeout(game.results,3*1000);
        }else {
            setTimeout(game.nextQuestion,3*1000);
        }
    },

    //display something if incorrect
    incorrectAnswer: function() {
        console.log("negative, ghost-rider");
        clearInterval(timer);
        game.incorrect++;
        $("#contentWrap").html('<h2>Study up, little turkey!</h2>');
        $('#contentWrap').append('<h3>The correct answer was: '+questions[game.currentQuestion].correctAnswer+'</h3>');


        if (game.currentQuestion==questions.length-1) {
            setTimeout(game.results,3*1000);
        }else {
            setTimeout(game.nextQuestion,3*1000);
        }
    },

    //something for when time is up
    timeUp: function() {
        clearInterval(timer);
        game.unanswered++;
        $('#contentWrap').html('<h2>Out of Time!</h2>');
        $('#contentWrap').append('<h3>The correct answer was: '+questions[game.currentQuestion].correctAnswer+'</h3>');

        if (game.currentQuestion==questions.length-1) {
            setTimeout(game.results,3*1000);
        }else {
            setTimeout(game.nextQuestion,3*1000);
        }
    },

    //reset
    reset: function() {

    },

    //results page
    results: function() {
        clearInterval(timer);
        $('#contentWrap').html("<h2>Are you done or are you finished, little turkey?</h2>");
        $('#contentWrap').append("<h3>Correct: "+game.correct+"</h3>");
        $('#contentWrap').append("<h3>Incorrect: "+game.incorrect+"</h3>");
        $('#contentWrap').append("<h3>Unanswered: "+game.unanswered+"</h3>");
    }

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