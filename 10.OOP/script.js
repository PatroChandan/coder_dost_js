//----------Object Oriented Programing------------
/**
 * --------10.1 Constructor and NEW operator-----------
 * We can not use "arrow" function as constructor
 * call "constructor" function using "new" keyword
 * 1.new {object} created empty initially
 * 2."this" = {object}
 * 3.object linked to prototype
 * 4.function automatically return {object}
 */
let Car = function(color,model){
    this.color = color;
    this.model = model;
    
}
Car.prototype.startEngine = function(){//Prototypes
    console.log("This is start engine method of car");
}
Car.prototype.company = "TATA"
// console.log(Car.prototype);//
let instanceOfCar = new Car("Yellow",2021);
let instance = new Car("Blue",2000);
console.log(instanceOfCar,instance);
instanceOfCar.startEngine();

/**
 * --------10.2 Prototypes----------
 */

/**
 * ---------10.3 Prototypical inheritance---------
 */

//It is with instance of constructor but with instance we have to use".__proto__
console.log(instance.__proto__);

// it is with constructor
console.log(Car.prototype);
// Car.prototype is prototype "of all objects" created through the Car constructor


/**
 * ----------10.4 ES6 Classes----------
 * ES6 Classess(They still implement prototype inheritance behind the scene)
 */
// class declaration
class Bike {
    constructor(color,model){
        this.color = color;
        this.model = model;
    }
    startEngine(){
        console.log("This is start engine method of bike class");
    }
}

let honda = new Bike("Red",2021);
console.log(honda);
honda.startEngine();

//Important points
//classes are not hoisted
//classes are also first class citizens(Pass as an argument or return)
//Classes are executed in strict mode

/**
 * -----------10.5 setters and getters------------
 * Getters and setters allow you to define object Accessors
 * We can also use in class
 */
//class declaration

class Bike1 {
    constructor(color,model){
        this.color = color;
        this.model = model;
    }
    startEngine(){
        console.log("This is start engine method of bike class");
    }
    get _startEngine(){
        console.log("This is start engine method using get");
    }

    set changeColor(color){
        console.log(this.color = color);
    }
    get description(){
        return `Color of Bike is ${this.color} and its model is ${this.model}`;
    }
}
let bajaj = new Bike1("Blue",2022);
bajaj.startEngine()//accessing as function
bajaj._startEngine;//accessing as property

bajaj.changeColor = "Red";//set as property
console.log(bajaj);
console.log(bajaj.description)

/**
 * ------------10.6 static methods-----------
 * static methods(method which is not present on constructor "prototype" property but "constructor" itself);
 */
class Bike2 {
    constructor(color,model){
        this.color = color;
        this.model = model;
    }
    startEngine(){
        console.log("This is start engine method of bike class");
    }
}

// static method
Bike2.breakMethod = function(){
    console.log("This is break method of bike");
}

let bajaj1 = new Bike2("Yellow",2023);
bajaj1.startEngine();
Bike2.breakMethod();

console.log(Number.parseInt(15));
/**
 * -------------10.7 Class Inheritance------------
 * class in heritance(sub class)
 */
//class declaration

//parent class

class Car1 {
    constructor(color,model){
        this.color = color;
        this.model = model;
    }
    startEngine(){
        console.log("This is start engine method of bike class");
    }
}

class Bike3 extends Car1{
    //Add some new properties and "method" as well
    constructor(color,model,engineCapacity){
        super();
        this.engineCapacity = engineCapacity;
    }
    bikeMethod(){
        console.log("This is method of Bike class");
    }
}

let newBike = new Bike3("Black",2021,"150cc");
console.log(newBike)
/**
 * --------------10.8 Inheritance by Prototypes-----------
 * prototype inheritance(using constructor function)
 */
// parent class
let Car2 = function(color,model){
    this.color = color;
    this.model = model;
}

Car2.prototype.startEngine = function(){
    console.log("This is start Engine method");
}

let maruti = new Car2("Blue",2021);
console.log(maruti);

let Bike4 = function(color,model,engineCapacity){
    Car.call(this,color,model);
    this.engineCapacity = engineCapacity;
}

// inheritad from parent class

Bike4.prototype.ownBike = function(){
    console.log("This is own Bike class method");
}

let bike1 = new Bike4("green",2019,"200cc");
let bike2 = new Bike4("brown",2022,"150cc");
console.log(bike1,bike2)
/**
 * --------------10.9 Chaining of methods----------
 */

class bankAccount {
    constructor(owner,pin){
        this.owner = owner;
        this.pin = pin;
        this.movement = [];
    }
    getMovement(){
        return this.movements;
    }
    deposite(val){
        this.movement.push(val);
        return this;
    }
    withdraw(val){
        this.deposite(-val);
        return this;
    }
}

let account = new bankAccount("Zack",5685);

//chain method
account.deposite(50).withdraw(20).deposite(100).withdraw(25);
console.log(account.getMovement());
console.log(account);