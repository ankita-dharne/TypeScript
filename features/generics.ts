//Generics sample
class ArrayOfAnything <T>{
    constructor(public collection: T[]) {}

    get(index: number):T{
        return this.collection[index];
    }
}

const arr = new ArrayOfAnything(['a','b','c']);

//Generics around function
function printAnthing<T>(arr: T[]): void{
    for(let i = 0; i < arr.length;i++){
        console.log(arr[i]);
    }
}

printAnthing(['a','b','c']);

//
class House{
    print(){
        console.log('I m House');
    }
}

interface Printable{
    print():void
}

function printHousesOrCars<T extends Printable>(arr:T[]):void{
    for(let i = 0; i < arr.length;i++){
        arr[i].print();
    }
}