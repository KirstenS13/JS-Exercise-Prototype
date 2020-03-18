/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

//Person Object Constructor(takes two parameters and has an empty array)
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

//'eat' method(adds items to the empty array)
Person.prototype.eat = function(someFood) {
  if (this.stomach.length <= 9) {
    return this.stomach.push(someFood);
  }
}

//'poop' method(empties the array)
Person.prototype.poop = function() {
  this.stomach = [];
}

//'toString' method(returns person's name and age)
Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`;
}

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

//Car Object Constructor(takes two parameters, has tank and odometer both set to zero)
function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

//'fill' method(adds gallons of gas to the tank property)
Car.prototype.fill = function(gallons) {
  return this.tank = this.tank + gallons;
}

//'drive' method(adds distance to odometer, removes gas from tank)
Car.prototype.drive = function(distance) {
  if (this.tank > 0) {
    this.odometer = this.odometer + distance;
    const gallonsUsed = distance / this.milesPerGallon;
    this.tank = this.tank - gallonsUsed;
  } else {
    const drivableMiles = distance - Math.floor((-this.tank * this.milesPerGallon));
    this.odometer = this.odometer + drivableMiles;
    return `I ran out of fuel at ${this.odometer} miles!`;
  }
}

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

//Baby Object Constructor - Subclass of Person Object Constructor
//(takes three parameters)
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

//copied the methods from Person's prototype to Baby's prototype
Baby.prototype = Object.create(Person.prototype);

//'play' method(lets baby play with favoriteToy)
Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`;
}

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:

  1. When "this" is defined in the global scope, it refers to whatever the Javascript is being run in. So, if the JS is running in a browser, "this" refers to the window object.

  2. Basically, if you call a method on an object, and that method uses the "this" keyword somewhere in it, then the "this" keyword refers to the object the method was called on. 
    example:
        kelly.sayHi(); ========> "this" refers to object 'kelly'
        danny.sayHi(); ========> "this" refers to object 'danny'

  3. If you use an object constructor to make a new instance of an object, then the "this" keyword that is used in the object constructor refers to the new instance of that object. This is true for every new instance you make.

  4. When you use the call or apply methods you can tell "this" what to refer to. You can basically override what "this" would normally be pointing to.

*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
