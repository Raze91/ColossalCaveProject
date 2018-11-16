

let equipment = [];

let inventory = [];

let player = {
    name : 'Joueur',
    health : 100,
    strength : 13,
    weight : 9,
    weight_limit : strength*7.5,
    attack : 5,
    armor : 5 
}

function Take(object){
    if(object.weight + player.weight <= player.weight_limit){
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

function Use(object){
    if(equipment.indexOf(object.name) != -1 && inventory.indexOf(object.name) != -1){
        object.special_effect;
        console.log('Vous utilisez l\'objet :' + object.name);
    } else {
        console.log('Cet objet n\'est pas équipé');
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

function ShowInventory(){
        console.log('Votre inventaire contient :' + inventory);
}

function ShowEquipment(){
        console.log('Vous êtes équipé de :' + equipment)
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

let seringue = {
    name : 'Seringue de Santé',
    weight : 1,
    attack : 0,
    armor : 0,
    charges : 1,
    special_effect : function(){
        if(this.charges >= 1){
            player.health += 100;
        } else {
            console.log('Le pouvoir de la potion est épuisé');
        }
    }
}

let kevlar = {
    name : 'Protections en Kevlar',
    weight : 10,
    attack : 0,
    armor : 10,
}

Take(Rifle);
Equip(Rifle)
Take(kevlar);
Equip(kevlar);
console.log(player.attack);
console.log(player.armor);
Unequip(Rifle);
Unequip(kevlar);
console.log(player.attack);
console.log(player.armor);

