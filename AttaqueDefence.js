const diceRollModule = require('./dice.js');



function Attack(attacker, defender){
    let nb = diceRollModule.diceRoll(20);
    console.log(nb);
    if (defender.health > 0 && attacker.health > 0){
            if(nb >= defender.armor){
                defender.health = defender.health -= attacker.attack
                console.log(attacker.name + ' a infligé ' + attacker.attack + ' points de dégats a ' + defender.name);
                console.log('il reste ' + defender.health + ' points de vies a ' + defender.name);
            } else {
                console.log('L\'attaque de ' + attacker.name + ' a été bloquée');
            } if(defender.health <= 0){
                console.log(defender.name + ' est mort');
            }
    } else {
        console.log('Le combat est déjà terminé');
    }

}



exports.Attack = Attack ;