let result = '';
let chose = '';
let computer = 0;

let score = {
    win:0,
    lose:0,
    draw:0
};


function computerPlay() {
        computer = Math.floor(Math.random() * 3) + 1;
    }
    function updateDisplay() {
        document.getElementById('output').textContent = result;
        document.getElementById('cho').innerHTML = chose;
    }
    function resetScore(){
        score.win=0;
        score.lose=0;
        score.draw=0;
        printScore();
        
    }


        function playRols(computerPlay, user) {
                if (user === 1) {
                    user = 1;
                    result = '';
                    chose = '';
                if (computer === 1) {
                    result = 'Draw';
                    chose = 'You <span class=\'big\'>✊✊</span> computer';
                    score.draw++;
                } else if (computer === 2) {
                    result = 'You lose';
                    chose = 'You <span class=\'big\'>✊🖐️</span> computer';
                    score.lose++;
                } else {
                    result = 'You win';
                    chose = 'You <span class=\'big\'>✊✌️</span> computer';
                    score.win++;
                }
            }

                else if(user ===2){
                    computer = computerPlay;
                    user = 2;
                    result = ' ';
                    chose = ' ';
                    if(computer === 1){
                    result = 'You win';
                    chose='You <span class=\'big\'>🖐️✊</span> computer';
                    score.win++;
                }
                else if( computer === 2){
                    result = 'Draw'; 
                    chose='You <span class=\'big\'>🖐️🖐️</span> computer';
                    score.draw++;
                }
                else{
                    result = 'You lose';
                    chose='You <span class=\'big\'>🖐️✌️</span> computer';
                    score.lose++;
                }
            }
            
            else{
                        computer = computerPlay;
                        user = 3;
                        result = '';
                        chose = '';
                        if(computer == 1 ){
                        result = 'You lose';
                        chose='You <span class=\'big\'>✌️✊</span> computer';
                        score.lose++;
                    }
                    else if(computer == 2){
                        result = 'You win';
                        chose='You <span class=\'big\'>✌️🖐️</span> computer';
                        score.win++;
                    }
                    else{
                        result = 'Draw';
                        chose='You <span class=\'big\'>✌️✌️</span> computer';
                        score.draw++;
                    }

                    }
                    
        }
                function printScore(){
                    document.getElementById('score').innerHTML = `Win: ${score.win} - Lose: ${score.lose} - Draw: ${score.draw}`;
                    
                }