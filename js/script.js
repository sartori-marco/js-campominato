// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito


// DUE ARRAY

var numeriUtente = [];
var numeriPc = [];

var tentativi = 100 - 16;


// PC 16 NUMERI 1 A 100 + LI PUSHO + NO RIPETIZIONI
while (numeriPc.length < 16) {
  var numRandom = numeriRandom (1,100);
  if (!numeriPc.includes(numRandom)) {
    numeriPc.push(numRandom);
  }
}
console.log(numeriPc);


// UTENTE NUMERI
var numeriUtente = inserimentoNumeriUtente(tentativi);
console.log(numeriUtente);



//////////FUNZIONI///////////
// NUMERI RANDOM
function numeriRandom(min,max){
  return Math.floor(Math.random() * (max - min + 1 ) ) + min;
}


//UTENTE NUMERI
function inserimentoNumeriUtente(n){
  var sentinella = true;
  while (numeriUtente.length < n && sentinella) {
    var numUtente = parseInt(prompt('inserisci un numero compreso tra 1 e 100'));
    if (numeriUtente.includes(numUtente)) {
      alert('Numero inserito due volte');
    }
    else if (!numeriPc.includes(numUtente)) {
      numeriUtente.push(numUtente);
    }
    else {
      sentinella = false;
      alert('Hai perso, ritenta');
    }
  }
  return (numUtente);
}
















//
