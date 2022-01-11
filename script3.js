console.log ('JS OK!')
/*
Traccia:
Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
*/

// 1 - Chiediamo all'utente per 10 volte dei numeri
// 2 - Il programma deve calcolare la somma dei numeri
// 3 - Far stampare in console la somma
// 4 - Stampare in pagina


// Recupero l'elemento in pagina 
const message = document.getElementById('display');

// Inizializzo una variabile per la somma
let sum = 0;
let isValid = true;

// Chiedo all'utente i numeri
for (let i = 0; i < 10; i++) {
    const number = parseInt(prompt('Inserisci numero' , '2'));
    if (isNaN(number)) {
    isValid = false;
    } else {
    sum += number;
    }
}

// Stampo in pagina 
if (isValid) {
    message.innerHTML = 'Somma finale:' + sum;
    // Stampo in console 
    console.log(sum);
} else {
    message.innerHTML = 'Hai inserito elementi non validi';
}