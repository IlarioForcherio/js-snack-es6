
// Snack 1
// Dato l'array di nomi:

// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.

// esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4

//selezioni gli input da html e gli attribuisco un value


//bottone
const htmlButton = document.getElementById('invia-btn');


//al click del bottone parte la funzione userNumber(min,max)
htmlButton.addEventListener("click", function userNumber(min,max) {
  //minimo
const minHtml = document.getElementById('min').value;
//trasformola stringa inserita in un numero
const minInteger = parseInt(minHtml);
//console.log(minInteger);

min = minInteger;
console.log(min);

//massimo 
const maxHtml = document.getElementById('max').value;
//trasformola stringa inserita in un numero
const maxInteger = parseInt(maxHtml);
//console.log(maxInteger);


max = maxInteger;
console.log(max);

if (min > max){
  alert('i numeri inseriti non sono corretti');
  location.reload()
}
 
return min,max



});

// //array di nomi 
  const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

 //ciclo foreach
//con il ciclo mi vado a recuperare il valore dei vari index stampando solo l'index dei due parametri
myArray.forEach(( element, index) => {
  console.log(index);
  const newArray = myArray.filter((index) =>{
return index < 4;
  } )
  
})
























// Snack 2
// Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
// let students = [
//     { name: 'Marco', id: 213, grades: 78 },
//     { name: 'Paola', id: 110, grades: 96 },
//     { name: 'Andrea', id: 250, grades: 48 },
//     { name: 'Gaia', id: 145, grades: 74 },
//     { name: 'Luigi', id: 196, grades: 68 },
//     { name: 'Piero', id: 102, grades: 50 },
//     { name: 'Francesca', id: 120, grades: 84 },
//   ];

// 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
// 2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
// 3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120




let students = [
      { name: 'Marco', id: 213, grades: 78 },
      { name: 'Paola', id: 110, grades: 96 },
      { name: 'Andrea', id: 250, grades: 48 },
      { name: 'Gaia', id: 145, grades: 74 },
      { name: 'Luigi', id: 196, grades: 68 },
     { name: 'Piero', id: 102, grades: 50 },
     { name: 'Francesca', id: 120, grades: 84 },
   ];
















    


















  










