"use strict";

//FONCTION DE VERIFICATION
//MOT=VALEUR VEUT DIRE QU'IL A POUR VALEUR PAR DEFAUT CELLE A LAQUELLE IL EST EGAL DANS LA PARENTHESE
function palindrome(mot = document.getElementById("motSaisi").value) {
    let motInverse = "";
    let resultat = "";
    let recepteur = mot.toLowerCase();
    // RECUPERATION DES LETTRES DE LA DERNIERE JUSQU'A LA PREMIERE
    for (let i = recepteur.length - 1; i >= 0; i--) {
        motInverse += recepteur[i];
    }
    if (recepteur == motInverse) {
        resultat = `Ce mot est un palindrome`;
    } else {
        resultat = `Ce mot n'est pas palindrome`;
    };
    //AFFICHAGE DU CONTENU
    document.getElementById("motEntre").innerHTML = `Mot : ${recepteur}`;
    document.getElementById("motReverse").innerHTML = `A l'envers : ${motInverse}`;
    document.getElementById("resultat").innerHTML = `${resultat}`;
}
palindrome()