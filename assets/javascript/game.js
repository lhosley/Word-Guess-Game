

<script type="text/javascript"></script>


        var selectableWords = ["hippo", "lion", "rhino", "snake", "turtle", "giraffe", "panther", "monkey", "cheetah", "toucan", "hyena", "zebra",];

        const maxTries = 10;

        var guessedLetters = [];

        var currentWordIndex;

        var guessingWord = [];

        var remainingGuesses = 0;

        var gameStarted = false;

        var hasFinished = false;

        var wins = 0;

        var losses = 0;

        resetGame();
        updateDisplay();

        function resetGame() {
            remainingGuesses = maxTries;
            gameStarted = false;


            currentWordIndex = Math.floor(Math.random() * (selectableWords.length));


            guessedLetters = [];
            guessingWord = [];


            for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {

                guessingWord[i] = "_,";


            }


            updateDisplay();
        };


        function updateDisplay() {

            document.getElementById("totalWins").innerText = wins;
            document.getElementById("totalLosses").innerText = losses;
            document.getElementById("currentWord").innerText = " ";
            for (var i = 0; i < guessingWord.length; i++) {
                document.getElementById("currentWord").innerText += guessingWord[i];
            }
            document.getElementById("remainingGuesses").innerText = remainingGuesses;
            document.getElementById("guessedLetters").innerText = guessedLetters;
            if (remainingGuesses <= 0) {
                ;
                hasFinished = true;
            }
        };

        document.onkeydown = function (event) {

            if (hasFinished) {
                resetGame();
                hasFinished = false;
            } else {

                if (event.keyCode >= 65 && event.keyCode <= 90) {
                    makeGuess(event.key.toLowerCase());
                }
            }
        };

        function makeGuess(letter) {
            if (remainingGuesses > 0) {
                if (!gameStarted) {
                    gameStarted = true;
                }


                if (guessedLetters.indexOf(letter) === -1) {
                    guessedLetters.push(letter);
                    evaluateGuess(letter);
                }
            }

            updateDisplay();
            checkWin();

        };


        function evaluateGuess(letter) {

            var positions = [];


            for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
                if (selectableWords[currentWordIndex][i] === letter) {
                    positions.push(i);
                }
            }


            if (positions.length <= 0) {
                remainingGuesses--;

            } else {

                for (var i = 0; i < positions.length; i++) {
                    guessingWord[positions[i]] = letter;
                }


            }
        };


        function checkWin() {
            if (guessingWord.indexOf("_,") === -1) {
                wins++;
                alert("you win! Press any key to play again!");
                hasFinished = true;
            }
            if (remainingGuesses <= 0) {
                losses++;
                alert(" you lose! Press any key to play again")
            }



        };

    
