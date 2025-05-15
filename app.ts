let myAge: number = 45;

let myName: string = "Obed Sarkodie";
let isMale: boolean = true;
let myId: string | number = "123-a";
let myVar: any = "Variable"

myId = 123;  // This works because I used the union operator thus |

//readonly inference makes the object immutable , you can't change it 

interface Point{
    readonly x: number;
    readonly y: number;
}

let pointP: Point = {x: 4, y: 2}

console.log(pointP);

//functions

function greetMessage(name: string): string{

    return `Hello ${name}`;
}

const message: string = greetMessage(myName)

console.log(message)

//optional chaning  ?

function greetMessage2(name: string, greeting?: string): string{

    if(greeting){
        return `${greeting} ${name}`
    }else{
        return `Hello ${name}`
    }
}

let greetMe: string = greetMessage2(myName, 'Hi!')
let greetMe2: string = greetMessage2(myName)

console.log(greetMe)
console.log(greetMe2)

//Arrow functions

let addTwoNumbers = (num1: number, num2: number): number =>{

    return num1 + num2;
}

const result: number = addTwoNumbers(45,34)
console.log(result)

//function overloading

function typeNumber(number: number): void;
function typeNumber(number: string):void;
function typeNumber(number: any): void{
    console.log(number)
}

typeNumber(456)
typeNumber('two')
typeNumber(myAge)

//Type guard narrowing down more than one type in a function

function displayMessage(params: number | string){
    if (typeof params == "number") {
        console.log(`Here is your number: ${params}`)
    }else if (typeof params == 'string') {
        console.log(`Here is the word you typed: ${params}`)
    }
}

displayMessage(myAge)
displayMessage(myName)
displayMessage(myId)

//High Order functions

function operate(
    x: number,
    y: number,
    operation: (a: number, b: number) => number
): number{
    return operation(x,y)
}

let result1: number = operate(6,8,(a,b)=>a+b)
let result2: number = operate(5,5,(a,b)=>a*b)

console.log(result1)
console.log(result2)


//Logical operators

let x: boolean = true;
let y: boolean = false;

let bool1: boolean = x && y;
let bool2: boolean = x || y;
let bool3: boolean = !x
let bool4: boolean = !y

//Control flow, switch ifs 

let day: number = 1
let dayName: string;

switch(day){
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = 'Unknown'
        break;
}

console.log(dayName)

//Looping

for(let i = 0; i <= 5; i++){
    console.log(i)
}

let i: number = 0
while(i<5){
    console.log(`success ${i}`)
    i++
}

let num: number = 1

do{
    console.log(`This will run at least once ${num}`)
    num++

}while(num < 5)


let fruits: string[] = ["Apple", "Banana","Orange", "Guava"]

for(let fruit of fruits){
    console.log(fruit)
}

//Gets the index of the array

for(let index in fruits){
    console.log(index)
    console.log(fruits[index])
}

//Can also be applied to strings and sets

for(let letter of myName){
    console.log(letter)
}





interface User{
    name: string;
    age: number;
    lavel: number;
}

let myData: User = {
    name: myName,
    age: myAge,
    lavel: 300
}

for(let key in myData){
    console.log(myData, ' ', key )
}


// Classes

class Person{
    personName: string;
    age: number;

    constructor(personName: string, age: number){
        this.personName = personName;
        this.age = age;
    }

     greet(){
        console.log(`Hello there my name is ${this.personName} and I'm ${this.age} years old.`)
    }
}


let person1 = new Person(myName,myAge)

person1.greet()

class Employee{
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string){
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    employeeDetails(){
        console.log(`Employee ${this.name} in the ${this.department} takes the amount of $ ${this.salary} income`)
    }
}

let employee1 = new Employee("I saac Dogbe", 3000,"Computer Science")
console.log(employee1.name)
employee1.employeeDetails


//Inheritance 

class Vehicle{
    public name: string;
    public tyres: number;

    constructor(name: string, tyres: number){
        this.name = name;
        this.tyres = tyres
    }

    vehicleFuel(){
        console.log(`${this.name} is a vehicle and it uses fuel`)
    }

}

class Car extends Vehicle{
    constructor(name: string, tyres: number){
      super(name, tyres)
    }

    carFunction(){
        console.log(`${this.name} is a car and it uses fuel it has ${this.tyres} tyres`)
    }
}

class MotorBike extends Vehicle{
    constructor(name: string, tyres: number){
        super(name, tyres)
    }

    motorBikeFunction(){
        console.log(`${this.name} is a motor bike therefore it has ${this.tyres} tyres`)
    }
}

let car1 = new Car('Honda', 4);
car1.vehicleFuel()
car1.carFunction()

//Generic Interfaces

interface Result<T,V>{
    response: T,
    message: V
}

let success: Result< number,string> = {
    response: 201,
    message: "Data Created"
}

