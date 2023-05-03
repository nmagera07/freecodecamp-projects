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



// prototype chain
// all objects in javascript have a 'prototype'. an object's prototype itself is an object

function Bird(name) {
    this.name = name;
  }
  
  typeof Bird.prototype;

// because prototype is an object, a prototype can have it's own prototype. the prototype of Bird.prototype is Object.prototype

let duck = new Bird("Donald");
duck.hasOwnProperty("name");

// the 'hasOwnProperty' method is defined in Object.prototype, which can be access by Bird.prototype, which can then be accessed by 'duck'
// this is an example of the prototype chain. Bird is the supertype for duck, while duck is the subtype
// Object is a supertype for both Bird and duck. Object is a supertype for all objects in javascript, therefore any object can use hasOwnProperty


// there is a principle in programming called 'Don't Repeat Yourself' (DRY). repeated code can cause problems because any chances requires fixing
// code in multiple places

Bird.prototype = {
    constructor: Bird,
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  
  Dog.prototype = {
    constructor: Dog,
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

// the describe method is repeated in two places. we can edit this code to be DRY by creating a supertype called 'Animal'

function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};


// we can create a new instance of an objec to inherit behavior from the supertype

let duck = Object.create(Animal.prototype)

// now we can set the prototype of the subtype to be an instance of animal

Bird.prototype = Object.create(Animal.prototype)

let duck = new Bird('Donald')
duck.eat()

// duck inherits all of Animal's properties, including the eat method


// when an object inherits its prototype from another object, it also inherits the supertype's constructor property

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor

// duck and all instances of Bird should show that they were constructed by Bird and not Animal. you can manually set the constructor property

Bird.prototype.constructor = Bird
duck.constructor

// we can still add new methods to a constructor function while still inheriting previous methods from it's supertype

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.fly = function() {
    console.log("I'm flying!");
  };

// now instances of Bird will have both 'eat()' and 'fly()' methods

// it is possible to overwrite an inherited method. we just have to add a method to the 'ChildObject.prototype'

function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};

// now if you call the 'eat()' method, it will output 'peck peck peck' instead of 'nom nom nom'

// there are cases where inheritance isn't the best solution. inheritance doesn't work well for unrelated objects. in these instances
// we can use 'mixins'. mixins allow other objects to use a collection of functions

let flyMixin = function(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    }
  };

// the flyMixin takes any object and gives it the fly method

let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let plane = {
    model: "777",
    numPassengers: 524
  };
  
  flyMixin(bird);
  flyMixin(plane);

  bird.fly();
  plane.fly();



// previously, bird had a public property 'name'. it is considered public because it can be accessed and changed outside of bird's definition
// any part of your code can easily changed the name of 'bird' to any value. 
// for example, if we had passwords or bank accounts that could easily be changed...well that wouldn't be good, right?
// simplest way to fix this problem is by creating a variable within the constructor function. this changes the scope of that variable to 
// only be accessible within the function. now it can't be changed globally

function Bird() {
    let hatchedEgg = 10;
  
    this.getHatchedEggCount = function() { 
      return hatchedEgg;
    };
  }
  let ducky = new Bird();
  ducky.getHatchedEggCount();

// in javascript, a function always has access to the context in which it was created. this is called 'closure'


// a common pattern in javascript is to execute a function as soon as it is declared

(function () {
    console.log("Chirp, chirp!");
  })();

// this is an anonymous function expression that executes right away. this patt