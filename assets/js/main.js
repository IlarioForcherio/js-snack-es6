
// // SNACK 1




// // Dato l'array di nomi:

// // const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

// // e dati due numeri min e max (min più piccolo di max).
// // Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// // Eseguiamo questo esercizio prima con forEach e poi con filter.

// // esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4

// //selezioni gli input da html e gli attribuisco un value


// // // //bottone
// const htmlButton = document.getElementById('invia-btn');

// //id minimo
// let minHtml = document.getElementById('min');
// //id massimo 
// let maxHtml = document.getElementById('max');
// //risultato
// let resultHtml = document.getElementById('result');


//  //array di nomi 
//  const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
//  //array vuoto
//  const newArray = [];



// htmlButton.addEventListener('click',function() {
//   //recuper i valori dell'input al click
//   //con parseInt trasforma le stringhe in valori numerici 
  
//   let min = parseInt(minHtml.value);
//   let max = parseInt(maxHtml.value);
//   //console.log(min , max),
//   //invoco la funzione e la faccio partire dopo il click
//   numberExtraction(min,max);




// //ciclo per estrarre gli elementi dell'array risultante 
// // la logica di questa funzione si attiva al click
// //se fosse fuori si attiverebbe al caricamento della pagina

// newArray.forEach((element) =>{

//   // result è un <ul></ul>
// //con inner html creo un tag li 
// //con += "appendo li a ul"
// resultHtml.innerHTML += `<li>${ element } </li>`

// } );

// });



// function numberExtraction(min,max){

//    //METODO FILTER
//   let secondArray = myArray.filter((element,index) =>{
  
//   if (index >= min && index <= max){
//   return true
//   }

// });
// console.log(secondArray); 

// // METODO FOR EACH()
// //con il ciclo mi vado a recuperare il valore dei vari index stampando solo l'index dei due parametri
// myArray.forEach((element,index) => {
  
//   if (index >= min && index <= max) {
    
//     newArray.push(element);
    
// }



 
  
// })
// console.log(newArray); 

// }



//    // SNACK 2 



// // Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
// // let students = [
// //     { name: 'Marco', id: 213, grades: 78 },
// //     { name: 'Paola', id: 110, grades: 96 },
// //     { name: 'Andrea', id: 250, grades: 48 },
// //     { name: 'Gaia', id: 145, grades: 74 },
// //     { name: 'Luigi', id: 196, grades: 68 },
// //     { name: 'Piero', id: 102, grades: 50 },
// //     { name: 'Francesca', id: 120, grades: 84 },
// //   ];

// // 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.

// // 2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70

// // 3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120




let students = [
      { name: 'Marco', id: 213, grades: 78 },
      { name: 'Paola', id: 110, grades: 96 },
      { name: 'Andrea', id: 250, grades: 48 },
      { name: 'Gaia', id: 145, grades: 74 },
      { name: 'Luigi', id: 196, grades: 68 },
     { name: 'Piero', id: 102, grades: 50 },
     { name: 'Francesca', id: 120, grades: 84 },
   ];


//METODO MAP  

//element,seleziona gli elementi oggetto dell'array
//element.name va a prendere il valore della chiave name

const nameUppercase = students.map((element) => {
  //con slice selezioniamo la stringa che è il valore di name e ne estraiamo i "valori"
  //slice lavora sulle stringhe
  //con uppercase prendiamo il valore stringa usato e lo trasformiamo in MAIUSCOLO
  return element.name.slice(0).toUpperCase();
} )
//console.log(nameUppercase);


//METODO FILTER (voto superiore a 70)

const smartStudent = students.filter((element) => {
  if (element.grades > 70 ){
    return true
  }
} )
//console.log(smartStudent);


//METODO FILTER (superiore a 70 e id superiore a 120)

const smartestStudent = students.filter((element) => {
  if ((element.grades > 70) && (element.id > 120) ){
    return true
  }
} )
//console.log(smartestStudent);



//SNACK 3 
// Snack 3
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let racingBike = [
  {
    nome:'Atala',
    peso: 10
  },
  {
    nome:'Bianchi',
    peso: 6
  },
  {
    nome:'Bottecchia',
    peso: 9
  },
  {
    nome:'Olmo',
    peso: 7
  },
];

// let pesoMinore = 0;


// //FOR
  
// for (let i=0; i <racingBike.length; i++ ){
// let pesiBike = racingBike[i].peso;


// if(pesiBike < controllo ){
//  pesoMinore = pesiBike
// }

// console.log(pesiBike)
// };

// //FOR EACH

// racingBike.forEach((element,index) => {
//   //console.log(element.peso)
//   let pesiBike = element.peso;
//   console.log(pesiBike);
  
//   //const min = Math.min.apply(null, pesiBike);
// });



// //si può fare con un oggetto singolo 
// const { nome,peso } = racingBike[0];
// //console.log(peso);


//MAP

// const pesiBici = racingBike.map((element,index) => {
 
//  console.log(element.peso);

// } );
// console.log(pesiBici);



// //versione con math.min

// var min = Math.min(...racingBike.map(element => element.peso));
// console.log(min);






// Snack4
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console


//generare numeri random per le due proprietà dinamicamente
//con destrutturizzazione creare un nuovo array che contengono nomi e falli

  


//Array squadre

let soccerTeams = [
  {
    nome: 'Torino',
    score: 0,
    fricevuti: 0,
  },
  {
    nome: 'Juventus',
    score: 0,
    fricevuti: 0,
  },
  {
    nome: 'Inter',
    score: 0,
    fricevuti: 0,
  },
  {
    nome: 'Roma',
    score: 0,
    fricevuti: 0,
  },
  {
    nome: 'Napoli',
    score: 0,
    fricevuti: 0,
  }
];

//funzione nunero random

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//console.log(randomNumber(1,100));

let numeroRandom = randomNumber(0, 100);
//console.log(numeroRandom);



//forEach per raggiungere gli elementi
soccerTeams.forEach((element) => {
  
  console.log(element.score);
  console.log(element.fricevuti);
});





















 



















    


















  










