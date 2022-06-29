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
 const userWord = prompt('Scegli la parola di cui vuoi sapere se è palindroma:' , 'aia');

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

/*
 Consegna:
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri.
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
    Dichiariamo chi ha vinto.
 Esecuzione: 
    1- prompt per decidere pari o dispari.
    2- prompt per scelta del numero.
    3- genero un numero random con function.
    4- sommo i due numeri.
    5- creo funzione per capire se è pari o dispari.
    6- dichiaro il vincitore.
*/

// prompt per pari o dispari
const choiseOfOddEven = prompt('scegli tra "pari" o "dispari"', 'pari').trim();
//controllo
if (choiseOfOddEven != 'pari' || choiseOfOddEven != 'dispari') {
    console.error('scegli tra "pari" e "dispari"');
}
console.log(choiseOfOddEven)

//prompt per numero tra 1 e 5 
const choiseOfNumber = parseInt(prompt('scegli un numero tra 1 e 5' , 4));
//controllo
if (choiseOfNumber < 1 || choiseOfNumber > 5 ) {
    console.error('scegli un numero compreso tra 1 e 5');
    location.reload();
}
console.log(choiseOfNumber)

// function per numero casuale
function getNumber ( min = 1 , max = 5) {
    let randomNumber = parseInt(Math.floor(Math.random() * ( max - min )) + min);

    return randomNumber;
}

const botNumber = getNumber( min = 1 , max = 5);
console.log(botNumber)
//somma numero bot e user
const currentSum= botNumber + choiseOfNumber;
console.log(currentSum);

//funzione per pari dispari
function isEven (sum) { //dove sum è un numero a cui vado a dare il valore nel momento in cui lo richiamo (riga 89)
    let isNumberEven= 'Vince Pari!';

    if ( sum % 2 !== 0) {
        isNumberEven= 'Vince dispari!';
    }

    return isNumberEven;
} 

const winner = isEven(currentSum);
console.log(winner)
