function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

// return a string
function signUpUser(name: string, email: string, isPaid: boolean): string {
  console.log("Name: ", name);
  console.log("Email: ", email);
  return `welcome ${name} ...Nice I can access your email ${email}`;
}

signUpUser("John", "6dPnM@example.com", true);

let loginUser = (email: string, password: string, isPaid: boolean = false) => {
  console.log("Email: ", email);
  console.log("Password: ", password);
};

loginUser("kishanranaghosh@gmail.com", "password");

// console.log(getUpper("hello")); // HELLO
// console.log(addTwo(2)); // 4

function getValue(myVal: number): boolean | string {
  if (myVal > 10) {
    return true;
  } else {
    return "";
  }
}

const getHello = (s: string): string => {
  return `Hello ${s}`;
};

const heros = ["Superman", "Batman", "Spiderman"];
// const heros = [1, 2, 3, 4];

const heroStrings = heros.map((hero: string) => {
  return `hero is ${hero}`;
});
// console.log(heroStrings);

function consoleError(errmsg: string | number): void {
  console.log(errmsg);
  // return `Error: ${errmsg}`;
}

// never is used for throwing error in functions in typescript (it never returns anything)
function handleError(errmsg: string): never {
  console.log(errmsg);

  throw `Error: ${errmsg}`;
}

export {};
