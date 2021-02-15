// Just playing around with some Javascript Types. Nothing to see here. 
// Docs / Support : https://www.w3schools.com/jsref/met_win_prompt.asp

// I wrote this in TS-playground (https://www.typescriptlang.org/play) so im not sure if it will work in an IDE. Did not test that yet.

// Code 

                                                     let StartGame: any = alert("Welcome to my TypeScript Game!")

var YourName = window.prompt("Please enter your name.", "Your Name Here!");
var YourAge = window.prompt("Please enter your age.", "Your age here!")
var question: String
var questionOne: String
var questionTwo: String
var AgeQuestion: String
var AgeAnswer: String | any
var RobotAge: Number

if (!YourName) {

    alert("You did not enter a name.")

} else {

    alert(`Cool so your name is ${YourName}!`);

    questionOne = `Great, I think you should give me a name too. What do you want to call me?`;

        alert(questionOne)
        var RobotName = window.prompt("Give me a name.", "Some name")
        alert(`You gave me the name ${RobotName}. Thanks!`)

    alert(`Now we both know our names! Your ${YourName} and I'm ${RobotName}.`)

    AgeQuestion = `You told me your age was ${YourAge}.` 
    RobotAge = 3
    alert(`${AgeQuestion}. Well I happen to be ${RobotAge} year's old. It looks like im a baby.`)

    alert("Thanks for playing! More coming soon.")

}

// Adding more soon...
