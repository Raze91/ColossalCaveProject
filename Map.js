

//Création de la map du jeu
let map = [
    ['_', 'HZ', '_', '_', 'BK'],
    ['_', '_TRL', '_', '_', '_'],
    ['_', '_', 'CM', '_', '_'],
    ['HZ', '_', '_', '_TS', '_M'],
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

let zombie = {
    name : 'Zombie',
    health : 20,
    attack : 4,
    armor : 5
}

let Rifle = {
    name : 'Fusil',
    weight : 6,
    attack : 13
}

let rocket_launcher = {
    name : 'Lance-Roquette',
    weight : 25,
    attack : 20,
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

let seringue = {
    name : 'Seringue de Santé',
    weight : 1,
    charges : 1,
    special_effect : function(){
        if(this.charges >= 1){
            player.health += 100;
        } else {
            console.log('Le pouvoir de la potion est épuisé');
        }
    }
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
            console.log(`Vous êtes arrivés au Bunker Nucléaire !
Vous apercevez le seigneur Karsal` + '[' + joueur.x + ',' + joueur.y + ']');
            break;
        case '_M':
            console.log(`Vous êtes sur une plaine désolée !
Vous apercevez un Mutant !` + '[' + joueur.x + ',' + joueur.y + ']');
            break;
        case 'CM':
            console.log(`Vous êtes arrivés à la Centrale !
Vous apercevez un Mutant !` + '[' + joueur.x + ',' + joueur.y + ']');
            break;
        case '_TR':
            console.log(`Vous êtes sur une plaine désolée !
Il y a une épave de camion !` + '[' + joueur.x + ',' + joueur.y + ']');
            console.log('Vous trouvez un ' + Rifle.name + ' !');
            break;
        case '_TRL':
            console.log(`Vous êtes sur une plaine désolée !
Il y a une épave de camion !` + '[' + joueur.x + ',' + joueur.y + ']');
            console.log('Vous trouvez un ' + rocket_launcher.name + ' !');
            break;
        case '_TS':
            console.log(`Vous êtes sur une plaine désolée !
Il y a une épave de camion !` + '[' + joueur.x + ',' + joueur.y + ']');
            console.log('Vous trouvez une ' + seringue.name + ' !');
            break;
        case 'HZ':
            console.log(`Vous êtes dans une maison abandonnée !
Vous tombez sur un Zombie`  + '[' + joueur.x + ',' + joueur.y + ']');
            break;
    };
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
un prototype de bombe capable de restaurer notre pays à son état d'origine.

Vous êtes un ancien membre des forces spéciales et avez survécu à l'explosion de la centrale, ayant appris cela
vous décidez de retrouver ce prototype afin de rapporter à votre pays sa gloire d'antan. Ce prototype serait
entre les mains d'un puissant mutant s'étant auto-proclamé 'seigneur Karsal'.
Vous partez donc à la recherche de ce mutant.


`;



//On précise que nous taperons de l'utf 8 dans la console
process.stdin.setEncoding('utf8');

//A chaque entrée dans la console, on appellera la fonction fléchée, rep sera la réponse tapée dans la console
//Ici on déclare ce que l'on fera lorsqu'on recevra une donée
process.stdin.on('data', (d) => {	
	let rep = d.toString().trim() 
	if(rep == "Ouest"){
        go('O');
		process.stdin.pause(); //stopper l'entrée
		
			slowLog("Voulez vous ramasser le fusil ?\n",100, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
			});
	}
	if(rep == "quit"){
		process.exit();
	}
});


/* début du script ici */
process.stdin.pause(); //stopper l'entrée pour ne pas pirater le texte
slowLog(intro,10,()=> {    
    slowLog(`Dans qu'elle direction voulez-vous allez ?
Nord
Sud
Est
Ouest
    
Nord-Est
Nord-Ouest
Sud-Est
Sud-Ouest

`,10, () => {
		process.stdin.resume();//réactiver l'entrée
	} );
});