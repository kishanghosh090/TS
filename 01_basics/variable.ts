let greetings: string = "Hello World!";
let myNum: number = 6;
console.log(greetings); // Output: Hello World!
console.log(myNum); // Output: 6

let isLoggedIn: boolean = true;
let isLoggedOut: boolean = false;

// let hero // Error: Variable 'hero' implicitly has an 'any' type
let hero: string;
function getHero() {
  return "Superman";
}
hero = getHero();

export {};
