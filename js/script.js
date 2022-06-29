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
//prompt per l'utente
const userWord = prompt('Scegli la parola di cui vuoi sapere se è palindroma:');

//funzione 
function isPalindrome (userWord) {
    let answer = false;
    let word= '';
//inverto lettere
    for (let i = userWord.length -1; i >= 0; i-- ) {
        word += userWord[i];
    } 
//se la parola del promp è uguale al nostro risultato allora = true
    if (word == userWord) {
        answer = true;
    }

    return answer;
}

const answer = isPalindrome(userWord); //obbligatorio per vedere il risultato della function
console.log(answer)

