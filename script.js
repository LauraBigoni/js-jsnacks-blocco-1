console.log ('JS OK!')
/*
Traccia:
L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
*/

// 1 - Domandare all'utente il primo numero
// 2 - Domandare all'utente un secondo numero
// 3 - Far stampare in console il numero maggiore
// 4 - Stampare in pagina


// Recupero l'elemento in pagina 
const message = document.getElementById('display');

// Chiedo all'utente l'email
let firstNumber = parseInt(prompt('Inserisci il primo numero' , '8'));
let secondNumber = parseInt(prompt('Inserisci il secondo numero' , '39'));

// Preparo la variabile col messaggio per il risultato
let result = 'Il numero più alto è: ';

// Validazione
if (isNaN(firstNumber) || isNaN(secondNumber)) {
    result = 'Uno dei valori inseriti non è valido';
} else {
    // Calcolo quale numero è maggiore
    if (firstNumber > secondNumber) {
    result += firstNumber;
}   else if (firstNumber < secondNumber) {
    result += secondNumber;
}   else {
    result = `I numeri sono uguali`;
}
}

// Stampo un messaggio in console con l'esito
console.log(result);

// Stampo in pagina
message.innerHTML = result;