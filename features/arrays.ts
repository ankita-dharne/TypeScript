const carMakers: string[] = ['ford', 'toyato', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

//Help with inference when extracting types
 const car = carMakers[0];
 const myCar = carMakers.pop();

 //Prevent incompatible
 carMakers.push(100);

 //Help with map
 carMakers.map((car:string): string => {
     return car.toUpperCase();
 });

//Flexible types
const importantDate: (Date | string) [] = [];
importantDate.push('2030-10-10');
importantDate.push(new Date());