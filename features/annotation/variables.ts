let apples: number = 5;
let speed:string = 'fast'; 
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date(); 

//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumber: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];

//classes
class Car{

}

let car: Car = new Car();

//Object literal
let point: {x:number; y:number} = {
    x : 10,
    y : 20
}

//function
const logNumber: (i:number) => void = (i:number) => {
    console.log(i);
};

//Use annotation
//1) Function that return the 'any' type
const json = '{"x":10, "y":20}';
const coordinates: {x:number; y:number} = JSON.parse(json);
console.log(coordinates); // {x:10, y:20};

//2) When we  declare variable on one line and initialize later
let words = ['red', 'green', 'blue'];
let foundWords: boolean;

for (let i = 0;i < words.length ; i++){
    if(words[i] === 'green'){
        foundWords = true; 
    }

}

// 3) Variable whise type cannot be inferred correctly
 let number = [-10, -1, 12];
 let numberAboveZero: boolean | number  = false;

 for(let i = 0; i < number.length; i++){
     if (number[i] > 0){
         numberAboveZero = number[i];
     }
 }

