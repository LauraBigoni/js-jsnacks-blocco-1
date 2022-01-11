console.log ('JS OK!')
/*
Traccia:
L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
*/

// 1 - Domandare all'utente la prima parola
// 2 - Domandare all'utente la seconda parola
// 3 - Far stampare in console la parola più lunga
// 4 - Stampare in pagina


// Recupero l'elemento in pagina 
const message = document.getElementById('display');

// Chiedo all'utente l'email
let firstWord = prompt('Inserisci il primo numero' , 'petaloso').trim();
let secondWord = prompt('Inserisci il secondo numero' , 'supercalifragilistichespiralitoso').trim();

// Preparo la variabile col messaggio per il risultato
let result = 'La lunghezza delle due parole è uguale ';

// Validazione
if (firstWord.length === 0 || secondWord.length === 0) {
    result = 'Uno dei valori inseriti non è valido';
} else {
// Calcolo la parola più lunga
if (firstWord.length > secondWord.length) {
    result = `La parola più corta è: ${secondWord} <br> la parola più lunga è: ${firstWord}`;
}   else if (firstWord.length < secondWord.length) {
    result = `La parola più corta è: ${firstWord} <br> la parola più lunga è: ${secondWord}`;
}
}

// Stampo un messaggio in console con l'esito
console.log(result);

// Stampo in pagina
message.innerHTML = result;