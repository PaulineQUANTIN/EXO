let chuck = ["Chuck Norris se souvient très bien de son futur",
"Rien ne sert de jouer aux échecs avec Chuck Norris, il ne connait pas l'échec.",
"Chuck Norris a joué au roi du silence avec un muet... et il a gagné",
"Chuck Norris à réussi à trouver la page 404",
"Hercule avait le choix : combattre Chuck Norris ou descendre aux enfers. Heureusement, Hercule a été raisonnable.",
"Un jour, au restaurant, Chuck Norris a commandé un steak. Et le steak a obéi.",
"Quand Google ne trouve pas quelque chose, il demande à Chuck Norris.",
"La seule chose qui arrive à la cheville de Chuck Norris... c'est sa chaussette.",
"Un jour, Chuck Norris a perdu son alliance. Depuis c'est le bordel dans les terres du milieu...",
"Certaines personnes portent un pyjama Superman. Superman porte un pyjama Chuck Norris.",
"Quand Google ne trouve pas quelque chose, il demande à Chuck Norris.",
"Quand la tartine de Chuck Norris tombe, la confiture change de côté.",
"Un jour, les PowerRangers ont rencontré Chuck Norris. Maintenant on les appelle les Télétubbies.",
"Les ennemis de Chuck Norris lui disent souvent d'aller au diable. Le Diable aimerait bien qu'ils arrêtent.",
"Dans GTA San Andreas, si vous avez 7 étoiles, c'est que vous êtes recherché par Chuck Norris.",
"Quand le croquemitaine va se coucher, il vérifie si il n'y a pas un Chuck Norris sous son lit.",
"Quand Chuck Norris passe devant un miroir, il n'y a pas de reflet: il n'y a qu'un seul Chuck Norris.",
"Danette se lève pour Chuck Norris.",
"Avoir la tête dans le cul c'est possible, avec Chuck Norris.",
"Chuck Norris peut faire des ronds avec une équerre",
"Chuck Norris peut gagner une partie de puissance 4 en trois coups."];

function rGB() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color[i] = Math.floor(Math.random()*256);
    }
    let rgb = `rgb(${color})`;
    return rgb;
}

function colorChange () {
    let color = rGB();
    let button = document.querySelector("button");
    let quote = document.querySelector("#quote");
    let body = document.querySelector("body");
    button.style.backgroundColor = color;
    quote.style.color = color;
    body.style.backgroundColor = color;
}

function quoteChange() {
    let quote = document.querySelector("#quote");
    quote.innerHTML = chuck[Math.floor(Math.random()*chuck.length)];
}

let button = document.querySelector("button");
button.addEventListener("click", colorChange);
button.addEventListener("click", quoteChange);
