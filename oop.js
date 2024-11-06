<<<<<<< HEAD
// 1. Defining a Base Class
class Animal {
    // Constructor: sets up properties
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    // Method: performs a behavior
    speak() {
        return `${this.name} makes a sound.`;
    }
}

// 2. Inheritance: Extending the Base Class
class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog"); // Calling the parent class constructor
        this.breed = breed;
    }

    // Overriding speak method (Polymorphism)
    speak() {
        return `${this.name} the ${this.breed} barks!`;
    }
}

// 3. Encapsulation: Private Fields and Methods
class Cat extends Animal {
    #secretMessage; // Private field (only accessible within the class)

    constructor(name) {
        super(name, "Cat");
        this.#secretMessage = "I'm a ninja!";
    }

    // Public method to access private field
    revealSecret() {
        return this.#secretMessage;
    }
    
    // Overridden method (Polymorphism)
    speak() {
        return `${this.name} meows softly.`;
    }
}

// 4. Static Methods and Properties
class Bird extends Animal {
    static numberOfWings = 2; // Static property

    constructor(name) {
        super(name, "Bird");
    }

    // Static method
    static flyInfo() {
        return `Birds usually have ${this.numberOfWings} wings to fly.`;
    }

    // Method specific to Bird
    speak() {
        return `${this.name} chirps!`;
    }
}

// 5. Demonstrating OOP Concepts
const buddy = new Dog("Buddy", "Golden Retriever");
console.log(buddy.speak());                // Buddy the Golden Retriever barks!

const whiskers = new Cat("Whiskers");
console.log(whiskers.speak());             // Whiskers meows softly.
console.log(whiskers.revealSecret());      // Accesses private field via method

const tweety = new Bird("Tweety");
console.log(tweety.speak());               // Tweety chirps!

// Accessing static property and method
console.log(Bird.numberOfWings);           // 2
console.log(Bird.flyInfo());               // Birds usually have 2 wings to fly.

// 6. Polymorphism: Using the same method on different subclasses
const animals = [buddy, whiskers, tweety];
animals.forEach(animal => {
    console.log(animal.speak()); // Calls each subclass's overridden speak() method
});
=======
// 1. Defining a Base Class
class Animal {
    // Constructor: sets up properties
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    // Method: performs a behavior
    speak() {
        return `${this.name} makes a sound.`;
    }
}

// 2. Inheritance: Extending the Base Class
class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog"); // Calling the parent class constructor
        this.breed = breed;
    }

    // Overriding speak method (Polymorphism)
    speak() {
        return `${this.name} the ${this.breed} barks!`;
    }
}

// 3. Encapsulation: Private Fields and Methods
class Cat extends Animal {
    #secretMessage; // Private field (only accessible within the class)

    constructor(name) {
        super(name, "Cat");
        this.#secretMessage = "I'm a ninja!";
    }

    // Public method to access private field
    revealSecret() {
        return this.#secretMessage;
    }
    
    // Overridden method (Polymorphism)
    speak() {
        return `${this.name} meows softly.`;
    }
}

// 4. Static Methods and Properties
class Bird extends Animal {
    static numberOfWings = 2; // Static property

    constructor(name) {
        super(name, "Bird");
    }

    // Static method
    static flyInfo() {
        return `Birds usually have ${this.numberOfWings} wings to fly.`;
    }

    // Method specific to Bird
    speak() {
        return `${this.name} chirps!`;
    }
}

// 5. Demonstrating OOP Concepts
const buddy = new Dog("Buddy", "Golden Retriever");
console.log(buddy.speak());                // Buddy the Golden Retriever barks!

const whiskers = new Cat("Whiskers");
console.log(whiskers.speak());             // Whiskers meows softly.
console.log(whiskers.revealSecret());      // Accesses private field via method

const tweety = new Bird("Tweety");
console.log(tweety.speak());               // Tweety chirps!

// Accessing static property and method
console.log(Bird.numberOfWings);           // 2
console.log(Bird.flyInfo());               // Birds usually have 2 wings to fly.

// 6. Polymorphism: Using the same method on different subclasses
const animals = [buddy, whiskers, tweety];
animals.forEach(animal => {
    console.log(animal.speak()); // Calls each subclass's overridden speak() method
});
>>>>>>> 8ccafaded905507e70ef66094658ada51daa9692
