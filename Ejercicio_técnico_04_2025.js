'use strict';
/*Escriba una función en JavaScript que reciba como parámetro un array de números
enteros comprendidos entre 1 y 100 y que escriba por la consola (o la terminal) el
número más alto del array (sólo el número, sin texto ni otros mensajes).
Suponga que el código que rellena el array y lanza la función ya está escrito.*/

//Creamos el array de números aleatorios del 1 al 100 (ya se nos daría)

// Función genera número random cdel 0 al max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
// Función genera un array con una cantidad determinada de números random (ya se nos daría)
  let oneArray = [];

  function randomArray(num, max, array){
    while (num > 0){
       array.push(getRandomInt(max))
       num = num -1;
    }
  };

randomArray(20, 101, oneArray)
console.log(oneArray);
  
// Función recibe array e imprime el número más alto

function getBiggerInt(newArray){
    const biggerInt = Math.max(...newArray)
    return console.log(biggerInt);     
};

getBiggerInt(oneArray);

/*Escriba un programa en JavaScript que contenga un array con números enteros (del
1 al 5) que pueden estar repetidos y genere en la consola (o en la terminal) un
histograma que represente cuánto se repite cada número. Debe mostrar la
frecuencia para todos los números, incluso si no están presentes en el array.
Puede asumir que el array tendrá una longitud corta (hasta 20 números).*/

let arrayOneToFive = [];
randomArray(20, 6, arrayOneToFive)
console.log(arrayOneToFive)

function histogram(histArray){

  let zero = 0
  let one = 0
  let two = 0
  let three = 0
  let four = 0
  let five = 0

  for (let i of histArray){
    if (i === 0){
      zero += 1        
  }else if (i === 1){
      one += 1
  }else if (i === 2){
      two += 1
  }else if (i === 3){
      three += 1  
  }else if (i === 4){
      four += 1  
  }else{
      five += 1
  }}

  console.log(`0: ${'*'.repeat(zero)}`)
  console.log(`1: ${'*'.repeat(one)}`)
  console.log(`2: ${'*'.repeat(two)}`)
  console.log(`3: ${'*'.repeat(three)}`)
  console.log(`4: ${'*'.repeat(four)}`)
  console.log(`5: ${'*'.repeat(five)}`)
};

histogram(arrayOneToFive);

/*Se precisa que codifique una función en lenguaje JavaScript que reciba como
parámetro un array de letras minúsculas de longitud indeterminada y que devuelva
un objeto con la propiedad “letter” que indique la letra que tenga más ocurrencias
seguidas en el array y la propiedad “count” que contabilice la cantidad de veces que
aparece la letra en esa secuencia.
La función debe analizar el array de izquierda a derecha, de forma que si existen dos
letras que se repiten de forma consecutiva el mismo número de veces, devolverá la
letra que cumpla esta condición por primera vez.*/

const letterArray = ["o", "b", "j", "e", "t", "o", "o", "n", "l", "a", "p", "r", "o", "p"]

function createObjCountLetter(array){
  
  const letter = "";
  const count = "";

  let countObj ={}
    
  for (let value of array){
    if(value !== value.countObj){
      countObj[value] += 1;
    }

  }
  console.log(countObj)
 
  /*return {
    letter: {letter},
    count: {count},
  }

    return console.log(letterObject)*/
}
createObjCountLetter(letterArray)