
function diceRoll(nbfaces) {
    return Math.ceil(Math.random()*(nbfaces));
}

let cpt3 = 0;
for(let i = 0; i < 6000000; i++){
    if(diceRoll(20) == 3) cpt3++ ;
}



exports.diceRoll = diceRoll ;