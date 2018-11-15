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
`Bienvenue dans le désert de la mort ... ☼
Partout des ossements de chameaux morts et une odeur de 
putréfaction.
`;

let suite = 
`Maintenant, vous entrez dans la caverne ...
`

//On précise que nous taperons de l'utf 8 dans la console
process.stdin.setEncoding('utf8');

//A chaque entrée dans la console, on appellera la fonction fléchée, rep sera la réponse tapée dans la console
//Ici on déclare ce que l'on fera lorsqu'on recevra une donée
process.stdin.on('data', (d) => {	
	let rep = d.toString().trim() 
	if(rep == "suite"){
		process.stdin.pause(); //stopper l'entrée
		slowLog(suite,100, () =>{
			slowLog("on fait quoi 2 ?\n",100, () => {
				process.stdin.resume();//réactiver l'entrée à la fin du log
			});
		});
	}
	if(rep == "quit"){
		process.exit();
	}
});


/* début du script ici */
process.stdin.pause(); //stopper l'entrée pour ne pas pirater le texte
slowLog(intro,100,()=> {    
    slowLog("on fait quoi ?\n",100, () => {
		process.stdin.resume();//réactiver l'entrée
	} );
});


