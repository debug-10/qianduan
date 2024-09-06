function LogParameter(
    target:any,
    propertyKey : string,
    parameterIndex : number
){
    console.log(`Parameter at index ${parameterIndex} in mthod ${propertyKey}` );
    
}

class DemoClass {
    greet(@LogParameter message :string){
        console.log(message);
    }
}

const demoClass = new DemoClass()
demoClass.greet('Hello')