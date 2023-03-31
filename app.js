const game = () => {
    let pScore = 0;
    let cScore = 0;
    let round = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
    
        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeout');
            match.classList.add("fadein");
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
            });
        });

        const computeroption = ['rock', 'paper', 'scissor'];

        options.forEach(option => {
            option.addEventListener('click', function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computeroption[computerNumber];
    
                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);

                    playerHand.src = `./img/${this.textContent}.png`;
                    computerHand.src = `./img/${computerChoice}.png`;
                }, 2000);

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerscore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        
        playerscore.textContent = pScore;
        computerScore.textContent = cScore;
    };
    
    const updateRounds = () => {
        const rounds = document.querySelector('.round p');
        rounds.textContent = round;
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        if (playerChoice === computerChoice) {
            winner.textContent = "It is Tie";
            round++
            updateRounds();
            finalscore();
            return;
        }

        if (playerChoice === 'rock') {
            if (computerChoice === 'scissor') {
                winner.textContent = 'Player Win';
                pScore++;
                round++
                updateScore();
                updateRounds();
                finalscore();
                return;
            } else {
                winner.textContent = "Computer win"
                cScore++;
                round++
                updateScore();
                updateRounds();
                finalscore();
                return;
            }
        }

        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Player Win';
                pScore++;
                round++;
                updateScore();
                updateRounds();
                finalscore();
                return;
            } else {
                winner.textContent = "Computer win";
                cScore++;
                round++;
                updateScore();
                updateRounds();
                finalscore();
                return;
            }
        }

        if (playerChoice === 'scissor') {
            if (computerChoice === 'paper') {
                winner.textContent = 'Player Win';
                pScore++;
                round++
                updateScore();
                updateRounds();
                finalscore();
                return;
            } else {
                winner.textContent = "Computer win";
                cScore++;
                round++;
                updateScore();
                updateRounds();
                finalscore();
                return;
            }
        }
    };

    const finalscore = () => {
        const player_win = document.querySelector('.player-win')
        const match = document.querySelector('.match');
        const label = document.querySelector('.label')
        const reset_btn = document.querySelector('.label button')
        const introScreen = document.querySelector('.intro')

        if (round === 20) {
            match.classList.add('fadeout1');
            label.classList.add("fadein1");

            if (pScore > cScore) {
                player_win.textContent = "Player Win The Match"
            }
            else {
                player_win.textContent = "Computer Win The Match"
            }
            
            if (pScore === cScore) {
                player_win.textContent = "Oops!! Match is Tied"
            }
        }

        reset_btn.addEventListener('click', () => {
            label.classList.add('fadeout2')
            introScreen.classList.add('fadein2')
            playMatch()
            cScore = 0
            pScore = 0
        })
    }
    startGame();
    playMatch();
    };

    game();
