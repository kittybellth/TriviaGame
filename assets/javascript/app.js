// jquery start here
$(document).ready(function(){

// create object for trivial game
 var trivia = [{
 		question: "Where are most meteorites come from?",
 		choice: ["The asteroid belt", "The Moon", "Mars", "The Sun"]
 	},
 	{
 		question: "What is it called when many meteors occur in a close time frame in the same part of the sky?",
 		choice: ["Meteor rains", "Meteor showers", "Meteor thunder", "Meteor blizzard"]
 	},

 	{
 		question: "Where is the impact crater that caused the dinosaurs to become extinct?",
 		choice: ["<small>It filled with water and became Lake Titicaca</small>", "Tunguska, Russia", "Off the east coast of Mexico", "Off the Great Australian Bight"]
 	},
 	
 	{
 		question: "What is the name for the main body of a comet?",
 		choice: ["Box", "Torso", "Nucleus", "Spheroid"]
 	}
 ];

// create varibles
var a = 0;
var triviaQuest = trivia[a].question;
var triviaChoice1 = trivia[a].choice[0];
var triviaChoice2 = trivia[a].choice[1];
var triviaChoice3 = trivia[a].choice[2];
var triviaChoice4 = trivia[a].choice[3];
var userClick = [];
var winCounter = 0;
var loseCounter = 0;
var unAnsCounter = 0;
var timer = 0;

// ============================== funtion code start here =========================
// 
function startGame () {
	
	// set time to 15
	var intervalId;
	timer = 15;

	// update the question and choices
	triviaQuest = trivia[a].question;
	triviaChoice1 = trivia[a].choice[0];
	triviaChoice2 = trivia[a].choice[1];
	triviaChoice3 = trivia[a].choice[2];
	triviaChoice4 = trivia[a].choice[3];

	// update time on the page
	$("#time").text(timer);

	// displays updated question and choices properly
	clearDiv();
	var triviaQuestDiv = $("<div class='text-center question'>");
		triviaQuestDiv.attr("data-name", triviaQuest);
		triviaQuestDiv.html("<h2>" + triviaQuest + "</h2>");

	$("#panel-main").append(triviaQuestDiv);

	var triviaChoiceDiv1 = $("<div class='btn-group'>");
	var triviaChoiceBtn1 = $("<button class='btn btn-default'>");
		triviaChoiceBtn1.attr("data-name", triviaChoice1);
		triviaChoiceBtn1.html("<h4>" + triviaChoice1 + "</h4>");
		triviaChoiceDiv1.append(triviaChoiceBtn1);

	var triviaChoiceDiv2 = $("<div class='btn-group'>");
	var triviaChoiceBtn2 = $("<button class='btn btn-default'>");
		triviaChoiceBtn2.attr("data-name", triviaChoice2);
		triviaChoiceBtn2.html("<h4>" + triviaChoice2 + "</h4>");
		triviaChoiceDiv2.append(triviaChoiceBtn2);

	$("#choice12").append(triviaChoiceDiv1, triviaChoiceDiv2);

	var triviaChoiceDiv3 = $("<div class='btn-group'>");
	var triviaChoiceBtn3 = $("<button class='btn btn-default'>");
		triviaChoiceBtn3.attr("data-name", triviaChoice3);
		triviaChoiceBtn3.html("<h4>" + triviaChoice3 + "</h4>");
		triviaChoiceDiv3.append(triviaChoiceBtn3);

	var triviaChoiceDiv4 = $("<div class='btn-group'>");
	var triviaChoiceBtn4 = $("<button class='btn btn-default'>");
		triviaChoiceBtn4.attr("data-name", triviaChoice4);
		triviaChoiceBtn4.html("<h4>" + triviaChoice4 + "</h4>");
		triviaChoiceDiv4.append(triviaChoiceBtn4);

	$("#choice34").append(triviaChoiceDiv3, triviaChoiceDiv4);

	// call neccessary function
	onclick();
	run();
};

// create function that will check the answer
function checkAnswer() {

	// when question number 1 is posted
	if(a == 0) {
			if (triviaChoice1 === userClick) {
				winCounter++;
				a++;
				awesome();
				console.log("Win " + winCounter);
			}

			else {
				loseCounter++;
				a++;
				correctAns1();
			}
		}

	// when question number 2 is posted
	else if(a == 1) {
			if (triviaChoice2 === userClick) {
				winCounter++;
				a++;
				awesome();
				console.log("Win " + winCounter);
			}

			else {
				loseCounter++;
				a++;
				correctAns2();
			}
		}

	// when question number 3 is posted
	else if(a == 2) {
			if (triviaChoice3 === userClick) {
				winCounter++;
				a++;
				awesome();
				console.log("Win " + winCounter);
			}

			else {
				loseCounter++;
				a++;
				correctAns3();
			}
		}

	// when the last question is posted
	else if(a == 3) {
			if (triviaChoice3 === userClick) {
				winCounter++;
				stop();
				clearDiv();
				var awesomeDiv = $("<div class='text-center question'>");
				awesomeDiv.html("<h2>Awesome !!!</h2>");
				$("#panel-main").append(awesomeDiv);
				setTimeout(endGame, 2000);
				console.log("Win " + winCounter);
			}

			else {
				loseCounter++;
				stop();
				clearDiv();
				var Ans3Div = $("<div class='text-center question'>");
				Ans3Div.html("<h4> The Correct anwser : </h4><h2>" + triviaChoice3 + "</h2>");
				$("#panel-main").append(Ans3Div);
				setTimeout(endGame, 2000);
			}
		}


};


// ======================== function after user click the answer ==================
// create function to clear Divs for showing the anwswe
function clearDiv() {

		$("#panel-main").empty();
		$("#choice12").empty();
		$("#choice34").empty();
};
// 
function awesome() {

		stop();
		clearDiv();
		var awesomeDiv = $("<div class='text-center question'>");
		awesomeDiv.html("<h2>Awesome !!!</h2>");
		$("#panel-main").append(awesomeDiv);
		setTimeout(startGame, 2000);
};

// if the first anwser is at the first button
function correctAns1() {

		stop();
		clearDiv();
		var ans1Div = $("<div class='text-center question'>");
		ans1Div.html("<h4> The Correct anwser : </h4><h2>" + triviaChoice1 + "</h2>");
		$("#panel-main").append(ans1Div);
		setTimeout(startGame, 2000);

};

// if the first anwser is at the first button
function correctAns2() {

		stop();
		clearDiv();
		var ans2Div = $("<div class='text-center question'>");
		ans2Div.html("<h4> The Correct anwser : </h4><h2>" + triviaChoice2 + "</h2>");
		$("#panel-main").append(ans2Div);
		setTimeout(startGame, 2000);

};

// if the first anwser is at the first button
function correctAns3() {

		stop();		
		clearDiv();
		var ans3Div = $("<div class='text-center question'>");
		ans3Div.html("<h4> The Correct anwser : </h4><h2>" + triviaChoice3 + "</h2>");
		$("#panel-main").append(ans3Div);
		setTimeout(startGame, 2000);

};

// if the first anwser is at the first button
function correctAns4() {

		stop();
		clearDiv();
		var ans4Div = $("<div class='text-center question'>");
		ans4Div.html("<h4> The Correct anwser : </h4><h2>" + triviaChoice4 + "</h2>");
		$("#panel-main").append(ans4Div);
		setTimeout(startGame, 2000);

};


// ================================= End Game =====================================
// function show scores after end of the game
function endGame() {
	clearDiv();
	var endGameWinDiv = $("<div class='text-center question'>");
	var endGameLoseDiv = $("<div class='text-center question'>");
	var endGameUnAnsDiv = $("<div class='text-center question'>");
	var reStartBtn = $("<button class='btn btn-default'>");
		reStartBtn.attr("id", "restart");
		endGameWinDiv.html("<h4>Correct anwser(s) = " + winCounter + "</h4>");
		endGameLoseDiv.html("<h4>Wrong anwser(s) = " + loseCounter + "</h4>");
		endGameUnAnsDiv.html("<h4>Unanwser(s) = " + unAnsCounter + "</h4><br>");
		reStartBtn.html("<h4> Restart </h4>");
		
		$("#panel-main").append(endGameWinDiv, endGameLoseDiv, endGameUnAnsDiv, reStartBtn);

		$("#restart").on("click", function() {
			restartGame();
		});
};


// =============================== timer function ================================
// function decrease time by 1 second
function decrement() {
	timer--;
	$("#time").text(timer);

	if(timer === 0){
		stop();
		a++;
		unAnsCounter++;

			if(a < trivia.length) {	
				setTimeout(startGame, 1000);
			}

			else if (a = trivia.length) {
				setTimeout(endGame, 2000);
			}
	}
};

function run() {
      intervalId = setInterval(decrement, 1000);
 };

function stop() {
	timer = 0;
	$("#time").text(timer);
	clearInterval(intervalId)
};


// ================================ on clike event ================================
//  create funtion for being called every time startGame funtion is excuted
function onclick() {
$(".btn").on("click", function(){
	var chonsenBtn = $(this).attr("data-name");	
	userClick = chonsenBtn;
	console.log(userClick);	
	checkAnswer();
});

};

// funtion restart game without reload the page
function restartGame() {
	a = 0;
	winCounter = 0;
	loseCounter = 0;
	unAnsCounter = 0;
	timer = 0;

	startGame();
};

// call funtion startgame
startGame();

});

