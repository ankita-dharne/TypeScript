class Vehicle{
    // color: string = 'red';

    // constructor(color: string){
    //     this.color = color;
    // }  instead of below code

    constructor(public color:string){} 

    protected honk(): void{
        console.log('beep');
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle{
    constructor(public wheels:number, color: string){
        super(color);
    }

    private drive(): void{
        console.log('Vroon');
    }

    startDrivingProcess(): void{
        this.drive();
        this.honk();
    }
}

const car = new Car(10, 'red');
car.startDrivingProcess();
