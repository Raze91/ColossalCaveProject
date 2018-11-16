const diceRollModule = require('./dice.js');
const AttackModule = require('./AttaqueDefence.js');

let equipment = [];

let inventory = [];

let player = {
    name : 'John',
    health : 100,
    weight : 9,
    attack : 5,
    armor : 5 
}
let player_strength = 13
let weight_limit = player_strength*7.5;




function Take(object){
    if(object.weight + player.weight <= weight_limit){
        inventory.push(object.name);
        player.weight += object.weight
        console.log('Vous avez ramassé ' + object.name);
    } else {
        console.log('Cet objet est trop lourd');
    }
}
function Throw(object){
    if(inventory.indexOf(object.name) != -1){
        inventory.splice(inventory.indexOf(object.name),1)
        console.log('Vous avez jeté ' + object.name)
    } else {
        console.log('Vous ne pouvez jeter quelquechose que vous n\'avez pas')
    }
}
function Equip(object){
    if(inventory.indexOf(object.name) != -1){
        inventory.splice(inventory.indexOf(object.name),1);
        equipment.push(object.name);
        player.attack += object.attack;
        player.armor += object.armor;
        console.log('Vous êtes maintenant équipé de :' + object.name);
    } else {
        console.log('Vous n\'avez pas cet objet');
    }
}
function Unequip(object){
    if(equipment.indexOf(object.name) != -1){
        equipment.splice(equipment.indexOf(object.name),1);
        inventory.push(object.name);
        player.attack -= object.attack;
        player.armor -= object.armor;
        console.log('Vous n\'êtes plus équipé de :' + object.name);
    } else {
        console.log('Vous n\'avez rien à déséquiper');
    }
}
//Création de la map du jeu
let map = [
    ['_', 'HZ3', '_', 'END', 'BK'],
    ['_', '_TRL', '_', 'TKV', 'END'],
    ['_', '_', 'CM', '_', '_'],
    ['HZ2', '_', '_', '_T', '_M'],
    ['_', '_TR', '_', 'HZ', '_'],
];

let karsal = {
    name : 'Karsal',
    health : 100,
    attack : 11,
    armor : 14
} 

let mutant = {
    name : 'Mutant',
    health : 50,
    attack : 7,
    armor : 8
}
let mutant2 = {
    name : 'Mutant',
    health : 50,
    attack : 7,
    armor : 8
}

let zombie = {
    name : 'Zombie',
    health : 20,
    attack : 4,
    armor : 5
}
let zombie2 = {
    name : 'Zombie',
    health : 20,
    attack : 4,
    armor : 5
}
let zombie3 = {
    name : 'Zombie',
    health : 20,
    attack : 4,
    armor : 5
}

let Rifle = {
    name : 'Fusil',
    weight : 6,
    attack : 13,
    armor : 0
}

let rocket_launcher = {
    name : 'Lance-Roquette',
    weight : 25,
    attack : 20,
    armor : 0,
    charges : 1,
    special_effect : function(){
        if(this.charges >= 1){
            this.charges -=1;
            this.attack += 10;
        } else {
            console.log('Vous n\'avez plus d\'ogive spécial');
        }
    }
}

let kevlar = {
    name : 'Protections en Kevlar',
    weight : 10,
    attack : 0,
    armor : 10,
}

//Position initiale DU Joueur
//y = map[] et x = [][]
let joueur = {
    x: 2,
    y: 4
};

//Direction = N, NE, NO, E, W, SE, ou SO
function go(direction) {

    switch (direction) {
        case 'O':
            if (joueur.x > 0) {
                joueur.x--;
                console.log(`Vous allez à l'Ouest`)
            } else {
                console.log("Vous ne pouvez pas prendre cette direction");
            }
            break;
        case 'N':
            if (joueur.y > 0) {
                joueur.y--;
                console.log("Vous allez au Nord");
            } else {
                console.log("Vous ne pouvez pas prendre cette direction");
            }
            break;
        case 'E':
            if (joueur.x < map[joueur.y].length - 1) {
                joueur.x++;
                console.log("Vous allez à l'Est");
            } else {
                console.log("Vous ne pouvez pas prendre cette direction");
            }
            break;
        case "S":
            if (joueur.y < map.length - 1) {
                joueur.y++;
                console.log("Vous allez au Sud");
            } else {
                console.log("Vous ne pouvez pas prendre cette direction");
            }
            break;
        case "NE":
            if (joueur.y > 0 && joueur.x < map[joueur.y].length - 1) {
                joueur.y--;
                joueur.x++;
                console.log("Vous allez au Nord-Est");
            } else {
                console.log("Vous ne pouvez pas prendre cette direction");
            }
            break;
        case "SE":
            if (joueur.y < map.length - 1 && joueur.x < map[joueur.y].length - 1) {
                joueur.y++;
                joueur.x++;
                console.log("Vous allez au Sud-Est")
            } else {
                console.log("Vous ne pouvez pas prendre cette direction");
            }
            break;
        case "NO":
            if (joueur.y > 0 && joueur.x > 0) {
                joueur.y--;
                joueur.x--;
                console.log("Vous allez au Nord-Ouest");
            } else {
                console.log("Vous ne pouvez pas prendre cette direction");
            }
            break;
        case "SO":
            if (joueur.y < map.length - 1 && joueur.x > 0) {
                joueur.y++;
                joueur.x--;
                console.log("Vous allez au Sud-Ouest");
            } else {
                console.log("Vous ne pouvez pas prendre cette direction");
            }
            break;
        default:

    }

    //Case où le joueur se trouve
    switch (map[joueur.y][joueur.x]) {
        case "_":
            console.log("Vous êtes sur une plaine désolée !" + "[" + joueur.x + "," + joueur.y + ["]"]);
            break;
        case "C":
            console.log("Vous êtes arrivés à la Centrale !" + "[" + joueur.x + "," + joueur.y + "]");
            break;
        case 'BK':
            console.log(`Vous êtes arrivés au Bunker Nucléaire !` + '[' + joueur.x + ',' + joueur.y + ']')
            if(karsal.health > 0){
                console.log('Vous apercevez le seigneur Karsal !')
            } else {
                console.log(`Félicitations, vous avez vaincu le seigneur Karsal et avez par la même occasion récupérez le prototype !
Vous êtes le sauveur de l'Amérique, vous recevrez par conséquent les honneurs pour vos hauts faits !`)
            }
            break;
        case '_M':
            console.log(`Vous êtes sur une plaine désolée !` + '[' + joueur.x + ',' + joueur.y + ']')
            if(mutant2.health > 0){
                console.log(`Vous apercevez un Mutant !`);
            } else {
                console.log('Vous retrouvez le cadavre du Mutant');
            }
            break;
        case 'CM':
            console.log(`Vous êtes arrivés à la Centrale !` + '[' + joueur.x + ',' + joueur.y + ']');
            if(mutant.health > 0){
                console.log(`Vous apercevez un Mutant !`);
            } else {
                console.log('Vous retrouvez le cadavre du Mutant');
            }
            break;
        case 'END':
            if(karsal.health <= 0){
                console.log(`Félicitations, vous avez vaincu le seigneur Karsal et avez par la même occasion récupérez le prototype !
Vous êtes le sauveur de l'Amérique, vous recevrez par conséquent les honneurs pour vos hauts faits !`)
            }
            break;
        case 'TKV':
            console.log(`Vous êtes sur une plaine désolée !
Il y a une épave de camion !` + '[' + joueur.x + ',' + joueur.y + ']');
            console.log('Vous trouvez une ' + kevlar.name + ' !');
            break;
        case '_TR':
            console.log(`Vous êtes sur une plaine désolée !
Il y a une épave de camion !` + '[' + joueur.x + ',' + joueur.y + ']')
            if(inventory.indexOf(Rifle != -1)){
                console.log('Vous trouvez un ' + Rifle.name + ' !');
            }
            break;
        case '_TRL':
            console.log(`Vous êtes sur une plaine désolée !
Il y a une épave de camion !` + '[' + joueur.x + ',' + joueur.y + ']');
            console.log('Vous trouvez un ' + rocket_launcher.name + ' !');
            break;
        case '_T':
            console.log(`Vous êtes sur une plaine désolée !
Il y a une épave de camion !` + '[' + joueur.x + ',' + joueur.y + ']');
            break;
        case 'HZ':
            console.log(`Vous êtes dans une maison abandonnée !` + '[' + joueur.x + ',' + joueur.y + ']')
            if(zombie.health > 0){
                console.log(`Vous tombez sur un Zombie`);
            } else {
                console.log('Vous retrouvez le cadavre du Zombie');
            }
            break;
        case 'HZ2':
            console.log(`Vous êtes dans une maison abandonnée !` + '[' + joueur.x + ',' + joueur.y + ']')
            if(zombie2.health > 0){
                console.log(`Vous tombez sur un Zombie`);
            } else {
                console.log('Vous retrouvez le cadavre du Zombie');
            }
            break;
        case 'HZ3':
            console.log(`Vous êtes dans une maison abandonnée !` + '[' + joueur.x + ',' + joueur.y + ']')
            if(zombie3.health > 0){
                console.log(`Vous tombez sur un Zombie`);
            } else {
                console.log('Vous retrouvez le cadavre du Zombie');
            }
            break;
    };
    function END(){
        console.log(`Bravo vous avez vaincu le Seigneur Karsal et retrouvez le prototype !
Vous êtes le sauveur de l'Amérique et recevrez tout les honneurs que vous méritez !`);
    }
};


//Suite de directions
/*go('O'); //Plaine
go('N'); //Plaine
go('E'); //Château
go('S'); //Plaine
go('NE'); //Plaine
go("SE"); //Pas possible
go('O'); //Château
go("NO"); //Plaine
go("SO"); //Pas possible
go("S");
go("S");
go("S");
*/

function slowLog(texte,time,suite){
    let lettreCourante = 0;
    for( let i = 0; i < texte.length + 1; i++){
        setTimeout(() =>{
            if( i < texte.length){
                process.stdout.write(texte[lettreCourante]);
                lettreCourante++;
            }else{
                suite();
            }
        }, i*time);
    }
}

let intro = 
`Bienvenue dans les terres désolées !
Suite à l'explosion d'un prototype de centrale nucléaire ultra développée, l'Amérique a été changée.
L'explosion de cette centrale a eu l'effet d'une dizaine d'explosion nucléaire partout dans le pays.
Cependant, ayant prévu ce cas extrème, un groupe composé des meilleurs scientifiques est parvenu à créer
un prototype capable de diffuser une substance dans l'air afin de réprimer les radidations et donc de restaurer notre pays à son état d'origine.

Vous êtes John, un ancien membre des forces spéciales et avez survécu à l'explosion de la centrale, ayant appris cela
vous décidez de retrouver ce prototype afin de rapporter à votre pays sa gloire d'antan. Ce prototype serait
entre les mains d'un puissant mutant s'étant auto-proclamé 'seigneur Karsal'.
Vous partez donc à la recherche de ce mutant.


`;

let rules = `Vous pouvez choisir la direction que vous voulez prendre :
NORD
SUD
EST
OUEST
    
NORD EST
NORD OUEST
SUD EST
SUD OUEST

TAKE + le nom de l'objet pour le ramasser
EQUIP + le nom de l'objet pour l'équiper
ATTACK + le nom de l'ennemi pour l'attaquer

Good Luck !


`

let suite = 
`
Que voulez-vous faire ?

`



//On précise que nous taperons de l'utf 8 dans la console
process.stdin.setEncoding('utf8');

//A chaque entrée dans la console, on appellera la fonction fléchée, rep sera la réponse tapée dans la console
//Ici on déclare ce que l'on fera lorsqu'on recevra une donée
process.stdin.on('data', (d) => {	
    let rep = d.toString().trim() 
    rep = d.toString().trim().toUpperCase();
	if(rep == "OUEST"){
        go('O')
		process.stdin.pause(); //stopper l'entrée
		slowLog(suite,100, () =>{
			process.stdin.resume();//réactiver l'entrée à la fin du log
		});
    }
    if(rep == "EST"){
        go('E')
		process.stdin.pause(); //stopper l'entrée
		slowLog(suite,100, () =>{
			process.stdin.resume();//réactiver l'entrée à la fin du log
		});
    }
    if(rep == "NORD"){
        go('N')
		process.stdin.pause(); //stopper l'entrée
		slowLog(suite,100, () =>{
			process.stdin.resume();//réactiver l'entrée à la fin du log
		});
    }
    if(rep == "SUD"){
        go('S')
		process.stdin.pause(); //stopper l'entrée
		slowLog(suite,100, () =>{
			process.stdin.resume();//réactiver l'entrée à la fin du log
		});
    }
    if(rep == "SUD EST"){
        go('SE')
		process.stdin.pause(); //stopper l'entrée
		slowLog(suite,100, () =>{
			process.stdin.resume();//réactiver l'entrée à la fin du log
		});
    }
    if(rep == "SUD OUEST"){
        go('SO')
		process.stdin.pause(); //stopper l'entrée
		slowLog(suite,100, () =>{
			process.stdin.resume();//réactiver l'entrée à la fin du log
		});
    }
    if(rep == "NORD EST"){
        go('NE')
		process.stdin.pause(); //stopper l'entrée
		slowLog(suite,100, () =>{
			process.stdin.resume();//réactiver l'entrée à la fin du log
		});
    }
    if(rep == "NORD OUEST"){
        go('NO')
		process.stdin.pause(); //stopper l'entrée
		slowLog(suite,100, () =>{
			process.stdin.resume();//réactiver l'entrée à la fin du log
		});
    }
    if(rep == "ATTACK ZOMBIE" && joueur.x == 3 && joueur.y == 4){
        AttackModule.Attack(player, zombie);
        AttackModule.Attack(zombie, player);
		process.stdin.pause(); //stopper l'entrée
		slowLog(suite,100, () =>{
			process.stdin.resume();//réactiver l'entrée à la fin du log
		});
    }
    if(rep == "ATTACK ZOMBIE" && joueur.x == 0 && joueur.y == 3){
        AttackModule.Attack(player, zombie2);
        AttackModule.Attack(zombie2, player);
		process.stdin.pause(); //stopper l'entrée
		slowLog(suite,100, () =>{
			process.stdin.resume();//réactiver l'entrée à la fin du log
		});
    }
    if(rep == "ATTACK ZOMBIE" && joueur.x == 1 && joueur.y == 0){
        AttackModule.Attack(player, zombie3);
        AttackModule.Attack(zombie3, player);
		process.stdin.pause(); //stopper l'entrée
		slowLog(suite,100, () =>{
			process.stdin.resume();//réactiver l'entrée à la fin du log
		});
    }
    if(rep == "ATTACK MUTANT" && joueur.x == 2 && joueur.y == 2){
        AttackModule.Attack(player, mutant);
        AttackModule.Attack(mutant, player);
		process.stdin.pause(); //stopper l'entrée
		slowLog(suite,100, () =>{
			process.stdin.resume();//réactiver l'entrée à la fin du log
		});
    }
    if(rep == "ATTACK MUTANT" && joueur.x == 4 && joueur.y == 3){
        AttackModule.Attack(player, mutant2);
        AttackModule.Attack(mutant2, player);
		process.stdin.pause(); //stopper l'entrée
		slowLog(suite,100, () =>{
			process.stdin.resume();//réactiver l'entrée à la fin du log
		});
    }
    if(rep == "ATTACK KARSAL" && joueur.x == 4 && joueur.y == 0){
        AttackModule.Attack(player, karsal);
        AttackModule.Attack(karsal, player);
		process.stdin.pause(); //stopper l'entrée
		slowLog(suite,100, () =>{
			process.stdin.resume();//réactiver l'entrée à la fin du log
		});
    }
    if(rep == 'TAKE FUSIL' && joueur.x == 1 && joueur.y == 4){
        Take(Rifle);
        process.stdin.pause();
        slowLog(suite,100, () =>{
            process.stdin.resume();
        });
    }
    if(rep == 'TAKE KEVLAR' && joueur.x == 3 && joueur.y == 1){
        Take(kevlar);
        process.stdin.pause();
        slowLog(suite,100, () =>{
            process.stdin.resume();
        });
    }
    if(rep == 'TAKE LANCE-ROQUETTE' && joueur.x == 1 && joueur.y == 1){
        Take(rocket_launcher);
        process.stdin.pause();
        slowLog(suite,100, () =>{
            process.stdin.resume();
        });
    }
    if(rep == 'THROW FUSIL' && joueur.x == 1 && joueur.y == 1){
        Throw(fusil);
        process.stdin.pause();
        slowLog(suite,100, () =>{
            process.stdin.resume();
        });
    }
    if(rep == 'THROW LANCE-ROQUETTE' && joueur.x == 1 && joueur.y == 1){
        Throw(rocket_launcher);
        process.stdin.pause();
        slowLog(suite,100, () =>{
            process.stdin.resume();
        });
    }
    if(rep == 'THROW KEVLAR' && joueur.x == 1 && joueur.y == 1){
        Throw(kevlar);
        process.stdin.pause();
        slowLog(suite,100, () =>{
            process.stdin.resume();
        });
    }
    if(rep == 'EQUIP FUSIL'){
        Equip(Rifle);
        process.stdin.pause();
        slowLog(suite,100, () =>{
            process.stdin.resume();
        });
    }
    if(rep == 'EQUIP LANCE-ROQUETTE'){
        Equip(rocket_launcher);
        process.stdin.pause();
        slowLog(suite,100, () =>{
            process.stdin.resume();
        });
    }
    if(rep == 'EQUIP KEVLAR'){
        Equip(kevlar);
        process.stdin.pause();
        slowLog(suite,100, () =>{
            process.stdin.resume();
        });
    }
    if(rep == 'UNEQUIP FUSIL'){
        Unequip(fusil);
        process.stdin.pause();
        slowLog(suite,100, () =>{
            process.stdin.resume();
        });
    }
    if(rep == 'UNEQUIP LANCE-ROQUETTE'){
        Unequip(rocket_launcher);
        process.stdin.pause();
        slowLog(suite,100, () =>{
            process.stdin.resume();
        });
    }
    if(rep == 'UNEQUIP KEVLAR   '){
        Unequip(kevlar);
        process.stdin.pause();
        slowLog(suite,100, () =>{
            process.stdin.resume();
        });
    }
    if(rep == 'STATS'){
        console.log('Santé : ' + player.health + ' PV');
        console.log('Dégats : ' + player.attack + ' points de dégats');
        console.log('Armure : ' + player.armor + ' points d\'armure');
    }
	if(rep == "QUIT"){
		process.exit();
    }
    if(rep == 'HELP'){
        console.log(rules);
        process.stdin.pause();
        slowLog(suite,100, () =>{
            process.stdin.resume();
        });
    }
});

/* début du script ici */
process.stdin.pause(); //stopper l'entrée pour ne pas pirater le texte
slowLog(intro,10,()=> {    
    slowLog(rules,10, () => {
		process.stdin.resume();//réactiver l'entrée
    });
});

