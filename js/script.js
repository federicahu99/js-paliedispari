/*
 Traccia:
    Chiedere all’utente di inserire una parola.
    Creare una funzione per capire se la parola inserita è palindroma.
 Esecuzione:
    1- Prompt per la parola dell'utente.
    2- Creo function.
    3- scompongo la parola con function.
    4- inverto l'ordine della parola.
    5- vedo se il valore e tipo sono uguali.
*/

const userWord = prompt('Scegli la parola di cui vuoi sapere se è palindroma:');

function isPalindrome (userWord) {
    let answer = false;

    for ( i = userWord = userWord.lenght -1; i > 0; i-- ) {
        answer += userWord[i]
    } 

    if (answer === userWord) {
        answer = true
    }

    return answer;
}

isPalindrome();