'use strict';


var username = prompt('Welcome to the page, what\'s your name?');
alert('Hello ' + username + ' wanna play a game? Well, we\'re playing it anyway.');
console.log('the users name is ' + username);

//question 1
function questionOne (){
var answer = prompt('I enjoy the beach, yes or no?');
answer = answer.toLowerCase();
if (answer == 'yes') {
    prompt('Well you tried but it wasn\'t a very good effort.\n I enjoy the beach, yes or no?');
} else {
    alert('Congratulations, the ocean is too salty for my hair.');
}
console.log('user answered ' + answer);
}
questionOne();

// question 2
function questionTwo (){
var two = prompt('Do you think I hate cats?');
two = two.toLowerCase();
if (two == 'no') {
    prompt('Not even close.\n do you think I hate cats?');
} else {
    alert('Congratulations, I pretty much despise them.');
}
console.log('user answered ' + two);
}
questionTwo();

// question 3
function questionThree (){
var three = prompt('my favorite holliday is Valentines day, yes or no?');
three = three.toLowerCase();
if (three == 'yes') {
    prompt('not exactly, not much fun at all.\n my favorite holliday is Valentines day, yes or no?');
} else {
    alert('Way to go! Halloween is actually my absalute favorite!.');
}
console.log('user answered ' + three);
}
questionThree();

// question 4
function questionFour (){
var four = prompt('Would you agree I\'m a very social person and love being around people?');
four = four.toLowerCase();
if (four == 'no') {
    prompt('Don\'t judge a book by it\'s cover .\n Would you agree I\'m a very social person and love being around people?');
} else {
    alert('correct! I love people and can\'t live without social interaction.');
}
console.log('user answered ' + four);
}
questionFour();

// question 5
function questionFive (){
var five = prompt('Lastly, do you believe I have a clean bill of health?');
five = five.toLowerCase();
if (five == 'yes') {
    prompt('boy do i wish i did\n Lastly, do you believe I have a clean bill of health?');
} else {
    alert('That\'s right sadly. no one actually has perfect health wether it be physically or mentally.');
}
console.log('user answered ' + five);
}
questionFive();

// question 6
function questionSix (){
    var attemptsRemaining = 4;
    while(attemptsRemaining > 0 && answerSix !== 2){
        var answerSix = prompt( 'What do you think is my favorite number?');
        attemptsRemaining--;
        if(answerSix === 2){
            alert('Congradulations, that is correct');
            console.log('user guessed ' + answerSix + ' correctly');
        } else if(answerSix > 2){
            alert(answerSix + ' is incorect. You guessed too high');
            console.log('user guessed ' + answereSix + ' incorrectly');
        } else if(answerSix < 2){
            alert(answerSix + ' is incorrect. You guessed too low.');
            console.log('user guessed ' + answereSix + ' incorrectly');
        } 
        if(attemptsRemaining === 0){
            alert('You are out of guesses');
        }
    }
} 
questionSix();