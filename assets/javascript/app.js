function myFunction(){
    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["r", "p", "s"];
    var win = 0, loss = 0, draw = 0, threshold = 7, gameNumber = 0;
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // Alerts the key the user pressed (userGuess).
      alert("User guess: " + userGuess);

      // Alerts the Computer's guess.
      alert("Computer guess: " + computerGuess);

      //Initialize win, loss and draw variables:
      
      if(userGuess===computerGuess){
        draw++;
        gameNumber++;
      }
      else if((userGuess === 'p' && computerGuess==='r') || (userGuess === 's' && computerGuess==='p') || (userGuess === 'r' && computerGuess==='s') ){
        win++;
        gameNumber++;
      }
      else if((userGuess === 'r' && computerGuess==='p') || (userGuess === 'p' && computerGuess==='s') || (userGuess === 's' && computerGuess==='r') ){
        loss++;
        gameNumber++;
      }
      else{
        alert("Only press r, p or s!");
      }
    console.log("Win: "+ win);
    console.log("Loss: "+ loss);
    console.log("Draw: "+ draw);
    document.getElementById('win').innerHTML = win;
    document.getElementById('loss').innerHTML = loss;
    document.getElementById('draw').innerHTML = draw;
    document.getElementById('gameNumber').innerHTML = gameNumber;
    };
    // while(gameNumber <= threshold){
    //   function1(event);
    // }
    };
    //Set scores on html: