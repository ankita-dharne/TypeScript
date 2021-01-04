@classDecorator
class Boat {
    @test2Decorator
    color: string = 'red';

    @test2Decorator
    get formattedColor(): string{
        return `This boats color is ${ this.color}`; 
    }

    @logError('Error occured')
    pilot(@parameterDecorator speed: string, @parameterDecorator generateWake: Boolean): void {
        if(speed === 'fast'){
            console.log('swish');
        }else {
            console.log('Nothing');
        }
    }
}

function classDecorator( constructor: typeof Boat){
    console.log(constructor);
}

function parameterDecorator( target: any, key : string, index : number){
    console.log(key, target);
}

function test2Decorator( target: any, key : string): void {
    console.log(key);
}

function testDecorator( target: any, key : string): void {
    console.log('Target:', target);
    console.log('Key:', key);
}

function logError(errorMessage : string){
    return function logError( target: any, key : string, desc : PropertyDescriptor): void {
            const method = desc.value;
            desc.value = function() {
                try{
                    method();
                }catch(e){
                    console.log(errorMessage );
                }

            }
        }
}