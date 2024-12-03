
// // 1. Variables and Data Types.......................................
let name = "Mohsin";          // String
// // // var name = "Mohsin";          // String
const age = 23;           // Number (constant)
// // // var sum1 = 29.8               // Number ( Float)
let isEmployed = true;      // Boolean

// // // console.log(name)
// // // console.log('employed' , isEmployed)
// console.log(typeof(isEmployed))
// // console.log(age , nameisEmployed, ageEmployed', isEmployed)

// 2. Basic Operators...............................................
// let a = 10
// let b = 20
// let c = a + b
// let d = a * b
// console.log('The sum of a and b is ', c)
// console.log('The product of a and b is ', d)

// let sum = 11 + 5;           // Addition

// let product = 10 * 5;       // Multiplication
// let division = 10 / 2;      // Division

// let isEqual = sum == 15;   // Comparison.....................

// // == equality chcek 
// // === considtion check

// console.log('The sum is ', sum )
// console.log('The Product is ',product)
// console.log('The Division is ' , division)
// console.log('The Equality is ', isEqual)

// 3. Control Structures: Conditionals
//  \n == Escape Sequence
if (isEmployed) {
    console.log(`${name}  is employed  \n his age is ${age}`);
} else {
    console.log(`${name} is not employed.`);
}


//  4. Control Structures: Loops
// for (let initialize, terminate, increment) {
//     condition and output
// } 
    
// for (let i = 0; i < 50; i++) {    // for loop
//     console.log("For Loop:", i);
// }



let count = 0; // initialize count

while (count < 50) {              // while loop
    console.log("While Loop:", count);
    count++; // increment
}



// // 5. Functions
// function greetUser(username) {
//     return `Hello, ${username}!`;
// }
// console.log(greetUser(name));

// // 6. Arrow Functions
// const multiply = (a, b) => a * b;
// console.log("Multiply:", multiply(5, 3));

// 7. Arrays and Array Methods
// const fruits = ["Apple", "Banana", "Cherry"];
// fruits.push("Orange");           // Adding item
// console.log("Fruits:", fruits);
// const citrus = fruits.filter(fruit => fruit.includes("Orange")); // Filtering array
// console.log("Citrus Fruits:", citrus);

// // 8. Objects and Object Methods
// const person = {
//     name: "Alice",
//     age: 25,
//     greet() {
//         console.log(`Hello, I'm ${this.name}`);
//     }
// };
// console.log("Person's Age:", person.age);
// person.greet();

// // 9. Object Destructuring and Spread Operator
// const { name: personName, age: personAge } = person;
// console.log("Destructured Name:", personName);
// const newPerson = { ...person, isEmployed: true }; // Spreading properties
// console.log("New Person:", newPerson);

// // 10. Classes
// class Animal {
//     constructor(name, species) {
//         this.name = name;
//         this.species = species;
//     }
//     makeSound() {
//         return `${this.name} says hello!`;
//     }
// }
// const dog = new Animal("Buddy", "Dog");
// console.log(dog.makeSound());

// // 11. Promises and Asynchronous Programming
// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data fetched");
//         }, 2000);
//     });
// };
// fetchData().then(response => console.log(response));

// 12. Async/Await
// async function asyncFetch() {
//     try {
//         const data = await fetchData();
//         console.log("Async Fetch:", data);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }
// asyncFetch();

// 13. Modules (Example of importing/exporting) 
// Note: Run this part in a module environment or separate files with export/import.
// export function add(a, b) {
//   return a + b;
// }
// import { add } from './mathModule.js';

// 14. Error Handling (Try/Catch)
// try {
//     const result = multiply("a", 5); // Intentional error
//     console.log(result);
// } catch (error) {
//     console.error("Caught Error:", error);
// }

// // 15. DOM Manipulation (for browsers)
// document.addEventListener("DOMContentLoaded", () => {
//     const div = document.createElement("div");
//     div.textContent = "Hello from JavaScript!";
//     document.body.appendChild(div);
// });

// 16. JSON (Data Serialization/Deserialization)
// const jsonData = JSON.stringify(person);   // Convert object to JSON
// console.log("JSON Data:", jsonData);
// const parsedData = JSON.parse(jsonData);   // Parse JSON back to object
// console.log("Parsed Data:", parsedData);

// 17. Date and Time
// const now = new Date();
// console.log("Current Date and Time:", now.toLocaleString());

// // 18. Local Storage (for browsers)
// localStorage.setItem("username", name);            // Store item
// const storedName = localStorage.getItem("username"); // Retrieve item
// console.log("Stored Name from Local Storage:", storedName);
// localStorage.removeItem("username");               // Remove item

// // 19. Regular Expressions
// const regex = /hello/i;
// console.log("Regex Test:", regex.test("Hello, world!"));

// 20. Higher-Order Functions and Callback Functions
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(num => num * 2);  // Higher-order function (map)
// console.log("Doubled Numbers:", doubledNumbers);

// 21. Set and Map Data Structures
// const uniqueNumbers = new Set([1, 2, 2, 3, 4]);     // Set (Unique values only)
// uniqueNumbers.add(5);
// console.log("Set of Unique Numbers:", uniqueNumbers);

// const userRoles = new Map();
// userRoles.set("Alice", "Admin");
// userRoles.set("Bob", "User");
// console.log("User Roles Map:", userRoles);
