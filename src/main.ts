/**********
 TypeScript 1 - övningsuppgifter
 *********/

/****************** Övning 1.1 **********************/
// Deklarera tre variabler av typ number
// Tilldela de två första varsitt värde
// Tilldela den tredje summan av de två första


const number1:number = 10;
const number2:number = 15;
const number3:number = number1 + number2;
console.log(number3);


/****************** Övning 1.2 **********************/
// Deklarera tre variabler av typ string
// Tilldela de två första varsitt värde
// Tilldela den tredje 

const word1:string = 'Hej';
const word2:string = 'Hopp';
const word3:string = word1 + word2;
console.log(word3);

/****************** Övning 1.3 **********************/
// Deklarera två variabler, en av valfri typ och en av typ boolean
// Tilldela den första ett värde
// Utvärdera om den första variabeln är av typ number och tilldela resultatet till den andra variabeln

let variabel1:boolean = false;
const variabel2:string = 'Detta är variabel 2';
const variabel3:number = 5;

console.log(typeof(variabel1));
console.log(typeof(variabel2));
console.log(typeof(variabel3));

if (typeof(variabel3) == 'number' ){
  variabel1 = true;
}
console.log(variabel1);


console.log('___________________________FUNCTION__________________________');
console.log('___________________________2.1');


/****************** Övning 2.1 **********************/
// Skriv en funktion som tar emot två argument av typ number och returnera ett värde av typ number
// Funktionen ska multiplicera argumenten och returnera dem

function multi(arg1:number, arg2:number):number {
  const sum = arg1 * arg2;
  return sum;
}
console.log(multi(5, 3));

console.log('___________________________2.2');

/****************** Övning 2.2 **********************/
// Skriv en funktion som tar emot två argument av typ number och returnerar ett värde av typ boolean
// Funktionen ska addera de två argumenten och returnera true om summan är mer eller lika med 10, och false i annat fall

function moreOrLessThan10(argument1:number, argument2:number):boolean {
  const sum = argument1 + argument2;
  console.log(sum);
  let isItMore; 
  
  if(sum >= 10) {
    console.log('Summan är mer än 10');
    isItMore = true;
  }
  else {
    console.log('Summan är mindre än 10');
    isItMore = false;
  }
  return isItMore
}
// moreOrLessThan10(2,5);
console.log(moreOrLessThan10(3,5));

console.log('___________________________2.3');

/****************** Övning 2.3 **********************/
// Skriv en funktion med en parameter av typ number Array och returnerar ett värde av typ number
// Funktionen ska returnera längden på arrayen

function lengthOfArray(arry:number[]):number {
  const arrayLength = arry.length;
  // console.log(arrayLength);
  return arrayLength
}
console.log(lengthOfArray([1, 5, 10, 20, 15, 11, 12]));


console.log('___________________________2.4');

/****************** Övning 2.4 **********************/
// Skriv en funktion med två parameter av typ string Array och returnerar ett värde av typ boolean
// Funktionen ska returnera true om längden på arrayerna är lika långa, i annat fall ska den returnera false

function arrayEqualLenght(array1:string[], array2:string[]):boolean {
  // console.log(array1.length);
  // console.log(array2.length);
  let sameLenght= false;
  
  if (array1.length == array2.length){
    sameLenght = true;  }
  console.log(sameLenght);
  return sameLenght;
}

arrayEqualLenght(['1', '5', '10', '20', '15'], ['1', '5', '10', '20', '15', '20']);

console.log('___________________________2.5');

/****************** Övning 2.5 **********************/
// Skriv en funktion med två parameter av typ string Array och returnerar ett värde av typ string array
// Funktionen ska lägga ihop de båda arrayerna och returnera den nya arrayen.

function addArrays(array1:string[], array2:string[]):string[] {
  const newArray = array1.concat(array2);
  return newArray;
}

console.log(addArrays(['tjoo', 'hej'], ['hej', 'hopp']));


console.log('___________________________2.6');

/****************** Övning 2.6 **********************/
// Skriv en funktion med en parameter av typ number Array och returnerar ett värde av typ string Array 
// Funktionen ska returnera en array med lika många element som argumentet men alla numbers ska ha gjort om till string
//Hint: använd metoden toString()

function arraySameNumberOfElements(array1:number[]):string[] {
  // const arrayLength = array1.length;
  // console.log(arrayLength);
  const newArrayAsString = array1.toString();
  // console.log('Ny array som sträng: ' + newArrayAsString);
  const newArrayAsArray = newArrayAsString.split(',');
  // console.log('Ny array som array: ' + newArrayAsArray);
  console.log(typeof newArrayAsString);
  console.log(typeof newArrayAsArray);
  
  return newArrayAsArray;
}

console.log('Nya arrayen 2.6 blir: ' + arraySameNumberOfElements([1, 5, 10, 20, 15, 10]));

console.log('___________________________2.7');

console.log('_________________________HIT ÄR KLART_________________________');


/****************** Övning 2.7 **********************/
// Skriv en higher order funktion som har tre parametrar, en av typ Function och två av typ number array. Arrayerna behöver vara lika långa. Funktionen ska returnera en number array. 

// Skriv några valfria funktioner att använda som callback-funktioner. De ska alla ha två parametrar av typ number, göra någon beräkning med argumenten och returnera ett number.

// Higher order funktionen ska loopa igenom arrayerna och anropa callback-funktionen i varje loop med ett nummer från vardera arrayen.

// Higher order funktionen returnerar en array med resultatet av beräkningarna som görs med callback-funktionen

const array1 = [1, 2, 3, 4];
const array2 = [2, 3, 4, 5];
;

function returnNumberArray(func:Function, nrArray1:number[], nrArray2:number[]):number[] {
  // console.log(func(array1, array2));
  // const resultFromFunc = func(array1, array2);
  let resultFromFunc;
  
  const arg1 =  nrArray1.forEach((arraynumber) => {
    console.log(func);
  });
  const arg2 =  nrArray2.forEach((arraynumber) => {
    console.log(func);
  });

  console.log(arg1);

  // console.log('resultArray');
  // console.log(resultArray)
  
  return resultFromFunc;
}

function callbackAdd(arg1:number, arg2:number):number {
  const sum = arg1 + arg2;
  return sum;
}

function callbackMulti(arg1:number, arg2:number):number {
  const sum = arg1 * arg2;
  return sum;
}
// const resultAdd = returnNumberArray(add, [1, 2, 3, 4], [2, 3, 4, 5]);
// const resultMulti = callbackAdd(multi2, [1, 2, 3, 4], [2, 3, 4, 5]);

const resultAdd = returnNumberArray(callbackAdd, array1, array2);
const resultMulti = returnNumberArray(callbackMulti, array1, array2);

console.log(resultAdd); //[3, 5, 7, 9],
console.log(resultMulti);//[2, 6, 12, 20]

// console.log(returnNumberArray(resultAdd, 10, 20));
// console.log(returnNumberArray(resultMulti, 5, 2));

// returnNumberArray(resultAdd, [1, 2, 3, 4], [2, 3, 4, 5]);

// console.log(result1);
// console.log(result2);




console.log('___________________________OBJECT___________________________');
console.log('___________________________3.1');

/****************** Övning 3.1 **********************/

// Skriv en type alias för ett objekt som ska innehålla tre egenskaper:
// name som är en string
// age som är ett number
// presentation som är en funktion
// Skapa två olika objekt av din nya type, metoden presentation ska logga infon från de andra egenskaperna.
// Anropa metoderna på båda objekten

type PersonAndAge = {
  name: string,
  age: number, 
  presentation: Function;
}

const personObject1:PersonAndAge ={
  name: 'Petra',
  age: 48, 
  presentation(){
    console.log('This is the name: '+ this.name + ' and the age ' + this.age );
    
  } 
}
const personObject2:PersonAndAge ={
  name: 'Bosse',
  age: 14, 
  presentation(){
    console.log('This is the name: '+ this.name + ' and the age ' + this.age );
  } 
}
personObject1.presentation();
personObject2.presentation();

console.log('____________');
/****************** Övning 3.3 **********************/

// Skriv en type alias för ett bil-objekt som ska innehålla tre egenskaper:
// model som är en string
// year som är ett number
// price som är ett number
// Skriv en funktion som tar emot ett bil-objekt och returnerar ett nytt bil-objekt
// Funktionen ska räkna om priset efter 20% rabatt och returnera ett bil-objekt med det nya priset


type carObject ={
  model:string, 
  year: number, 
  price:number
}

const carObject1:carObject ={
  model:'Honda', 
  year: 1978, 
  price:20000
}
console.log(carObject1);


function carObjectDiscount(carObject){
  // console.log(carObject.price);

  const newCarObjectprice = carObject.price - (carObject.price * 0.20);
  // console.log(newCarObjectprice);

  const newCarObject = {
    model:carObject.model, 
    year: carObject.year, 
    price:newCarObjectprice
  }
  // console.log(newCarObject);
  
  return newCarObject;

}
carObjectDiscount(carObject1)
console.log(carObjectDiscount(carObject1));


console.log('____________');


/****************** Övning 3.3 **********************/

// Skriv en funktion som tar emot ett argument av typ Animal. Funktionen ska inte returnera någonting.
// Animal ska innehålla tre egenskaper
// namn - en string
// typ - en string
// ålder - ett number
// Funktionen ska logga all info om djuret i konsolen.


type AnimalObject = {
  name:string, 
  type:string, 
  age:number
}

const animal1:AnimalObject = {
  name:'Bosse', 
  type:'Cat', 
  age:14
}

function logAnimal(animal:AnimalObject){
  console.log(animal);
  
}

logAnimal(animal1);