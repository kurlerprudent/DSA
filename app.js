var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myAge = 45;
var myName = "Obed Sarkodie";
var isMale = true;
var myId = "123-a";
var myVar = "Variable";
myId = 123; // This works because I used the union operator thus |
var pointP = { x: 4, y: 2 };
console.log(pointP);
//functions
function greetMessage(name) {
    return "Hello ".concat(name);
}
var message = greetMessage(myName);
console.log(message);
//optional chaning  ?
function greetMessage2(name, greeting) {
    if (greeting) {
        return "".concat(greeting, " ").concat(name);
    }
    else {
        return "Hello ".concat(name);
    }
}
var greetMe = greetMessage2(myName, 'Hi!');
var greetMe2 = greetMessage2(myName);
console.log(greetMe);
console.log(greetMe2);
//Arrow functions
var addTwoNumbers = function (num1, num2) {
    return num1 + num2;
};
var result = addTwoNumbers(45, 34);
console.log(result);
function typeNumber(number) {
    console.log(number);
}
typeNumber(456);
typeNumber('two');
typeNumber(myAge);
//Type guard narrowing down more than one type in a function
function displayMessage(params) {
    if (typeof params == "number") {
        console.log("Here is your number: ".concat(params));
    }
    else if (typeof params == 'string') {
        console.log("Here is the word you typed: ".concat(params));
    }
}
displayMessage(myAge);
displayMessage(myName);
displayMessage(myId);
//High Order functions
function operate(x, y, operation) {
    return operation(x, y);
}
var result1 = operate(6, 8, function (a, b) { return a + b; });
var result2 = operate(5, 5, function (a, b) { return a * b; });
console.log(result1);
console.log(result2);
//Logical operators
var x = true;
var y = false;
var bool1 = x && y;
var bool2 = x || y;
var bool3 = !x;
var bool4 = !y;
//Control flow, switch ifs 
var day = 1;
var dayName;
switch (day) {
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
        dayName = 'Unknown';
        break;
}
console.log(dayName);
//Looping
for (var i_1 = 0; i_1 <= 5; i_1++) {
    console.log(i_1);
}
var i = 0;
while (i < 5) {
    console.log("success ".concat(i));
    i++;
}
var num = 1;
do {
    console.log("This will run at least once ".concat(num));
    num++;
} while (num < 5);
var fruits = ["Apple", "Banana", "Orange", "Guava"];
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
//Gets the index of the array
for (var index in fruits) {
    console.log(index);
    console.log(fruits[index]);
}
//Can also be applied to strings and sets
for (var _a = 0, myName_1 = myName; _a < myName_1.length; _a++) {
    var letter = myName_1[_a];
    console.log(letter);
}
var myData = {
    name: myName,
    age: myAge,
    lavel: 300
};
for (var key in myData) {
    console.log(myData, ' ', key);
}
// Classes
var Person = /** @class */ (function () {
    function Person(personName, age) {
        this.personName = personName;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello there my name is ".concat(this.personName, " and I'm ").concat(this.age, " years old."));
    };
    return Person;
}());
var person1 = new Person(myName, myAge);
person1.greet();
var Employee = /** @class */ (function () {
    function Employee(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    Employee.prototype.employeeDetails = function () {
        console.log("Employee ".concat(this.name, " in the ").concat(this.department, " takes the amount of $ ").concat(this.salary, " income"));
    };
    return Employee;
}());
var employee1 = new Employee("I saac Dogbe", 3000, "Computer Science");
console.log(employee1.name);
employee1.employeeDetails;
//Inheritance 
var Vehicle = /** @class */ (function () {
    function Vehicle(name, tyres) {
        this.name = name;
        this.tyres = tyres;
    }
    Vehicle.prototype.vehicleFuel = function () {
        console.log("".concat(this.name, " is a vehicle and it uses fuel"));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(name, tyres) {
        return _super.call(this, name, tyres) || this;
    }
    Car.prototype.carFunction = function () {
        console.log("".concat(this.name, " is a car and it uses fuel it has ").concat(this.tyres, " tyres"));
    };
    return Car;
}(Vehicle));
var MotorBike = /** @class */ (function (_super) {
    __extends(MotorBike, _super);
    function MotorBike(name, tyres) {
        return _super.call(this, name, tyres) || this;
    }
    MotorBike.prototype.motorBikeFunction = function () {
        console.log("".concat(this.name, " is a motor bike therefore it has ").concat(this.tyres, " tyres"));
    };
    return MotorBike;
}(Vehicle));
var car1 = new Car('Honda', 4);
car1.vehicleFuel();
car1.carFunction();
