// Initialize Firebase
var database = firebase.database();
var playerChoice = ["ROCK", "SCISSORS", "PAPER"];

//Player Choice function
database.ref().set({
    playerID: 1,
    playerName: name,
    win: 0,
    loss: 0,
    draw: 0,
    playerChoice: "ROCK"
});

$("#start").on("click", function () {
    var name = $("#name").val().trim();
    database.ref().on("value", function (snapshot) {
        $("#greeting").empty();
        $("#greeting").append("Hi "+ name + "! You are player"+ snapshot.val().playerID);
        $("#playerA").empty();
        $("#playerA").append("<div>" + snapshot.val().playerName + "</div>");
        $("#playerA").append("<div id=\"choice\">" + "ROCK" + "</div>");
        $("#playerA").append("<div id=\"choice\">" + "PAPER" + "</div>");
        $("#playerA").append("<div id=\"choice\">" + "SCISSORS" + "</div>");
        $("#playerA").append("<div>" + "Wins: " + snapshot.val().win + " Losses: " + snapshot.val().loss + "</div>");

        function playerChoiceFunction() {
            var choice = "";
            $("#playerA").on("click", "#choice", function () {
                choice = $(this).text();
                database.ref().set({
                    playerID: 1,
                    playerName: name,
                    win: 0,
                    loss: 0,
                    draw: 0,
                    playerChoice: choice
                });
                console.log(choice);
            })
            return choice;
        }

        var choice = playerChoiceFunction();
        console.log(choice);

        database.ref().set({
            playerID: 1,
            playerName: name,
            win: 0,
            loss: 0,
            draw: 0,
            playerChoice: choice
        });
        console.log(name);
        console.log(snapshot.val());
        console.log(snapshot.val().playerName);
        console.log(snapshot.val().win);
        console.log(snapshot.val().loss);
        console.log(snapshot.val().draw);
        console.log(snapshot.val().playerChoice);
    });
});

function myFunction() {
    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var win = 0, loss = 0, draw = 0, gameNumber = 0, playerNumber = 1, playerFree = true;
    // This function is run whenever the user presses a key.
    document.onkeyup = function (event) {
        // Determines which key was pressed.
        var userGuess = event.key;

        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        //Initialize win, loss and draw variables:

        if (userGuess === computerGuess) {
            draw++;
            gameNumber++;
        }
        else if ((userGuess === 'p' && computerGuess === 'r') || (userGuess === 's' && computerGuess === 'p') || (userGuess === 'r' && computerGuess === 's')) {
            win++;
            gameNumber++;
        }
        else if ((userGuess === 'r' && computerGuess === 'p') || (userGuess === 'p' && computerGuess === 's') || (userGuess === 's' && computerGuess === 'r')) {
            loss++;
            gameNumber++;
        }
        console.log("Win: " + win);
        console.log("Loss: " + loss);
        console.log("Draw: " + draw);
        //Set scores on html:
        document.getElementById('win').innerHTML = win;
        document.getElementById('loss').innerHTML = loss;
        document.getElementById('draw').innerHTML = draw;
        document.getElementById('gameNumber').innerHTML = gameNumber;
    };

};