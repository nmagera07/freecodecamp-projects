// objects

// objects in javascript are used to model real world objects, giving them properties and behavior

let duck = {
    name: "Aflac",
    numLegs: 2
  };

// the duck object has 2 properties, name and number of legs

// we can access certain properties of an object by using dot notation

let duck = {
    name: "Aflac",
    numLegs: 2
  };
  console.log(duck.name);

// the console would then print 'Aflac'

// objects can have a special type of property called a 'method'. methods are properties that are functions

let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + duck.name + ".";}
  };
  duck.sayName();

// this method adds a 'sayName' function that returns a sentence giving the name of the duck object

// while accessing the object's name via 'duck.name', doing this could cause problems if the object name changes. then your method wouldn't work
// we can avoid this issue by instead using the keyword 'this'. 'this' refers to the method that is associated with 'duck'. 
// even if the object name changes, the method still recognizes it is associated with the same object

// constructors

// constructors are functions that create new objects. they define properties and behaviors that will belong to the new object

function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}

// this constructor defines a 'bird' object with the properties 'name', 'color' and 'number of legs'
// constructors are defined with a capitalized name to distinguish them from other functions that are not constructors
// constructors use the keyword 'this' to set the properties of the object they will create
// constructors define properties and behaviors instead of returning a value as other functions might

let blueBird = new Bird();

// using the 'new' operator, we can create an instance of an object. this instance has all the properties of the constructor that is used to create it
// we can then access these properties as usual and modify them if needed

// in the previous example, every 'Bird' instance would have the same properties (unless modified). so if we wanted to create an object that is
// more flexible, we would create an object that receives parameters

function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

// now everytime we create a new instance of 'Bird', we can give it custom parameters to create whatever properties we need for the instance

let cardinal = new Bird('Bruce', 'red')

// we are creating a new instance called 'cardinal' with the name 'bruce' and the color 'red'. the 'numLegs' stays the same because it wasn't changed

// if we wanted to make sure the instance we created is from it's constructor, we can use the 'instanceof' operator. this returns a true or false value

let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  
  let crow = new Bird("Alexis", "black");
  
  crow instanceof Bird;

// this would return true because crow is an instance of bird

let canary = {
    name: "Mildred",
    color: "Yellow",
    numLegs: 2
  };
  
canary instanceof Bird;

// this would return false because the instance wasn't created from the 'Bird' object


// we can use prototype properties to reduce the amount of duplicated variables we have from an object
// properties of a prototype are shared among all instances of an object

Bird.prototype.numLegs = 2;

// now all instances of 'Bird' have the numLegs property

// an easier way to add properties to the prototype would be like so:

Bird.prototype = {
    numLegs: 2, 
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

// it is important to remember to define the constructor property when manually setting the prototype to a new object. if you don't, 
// the constructor property will be erased

Bird.prototype = {
    constructor: Bird,
    numLegs: 2,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name); 
    }
  };

// just how children inherit their genes from their parents, an object inherits its' prototype directly from the constructor function that created it

function Bird(name) {
    this.name = name;
  }
  
let duck = new Bird("Donald");

Bird.prototype.isPrototypeOf(duck); // this would return true

