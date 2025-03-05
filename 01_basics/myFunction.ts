function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name, email, isPaid: boolean) {
  console.log("Name: ", name);
  console.log("Email: ", email);
}

signUpUser("John", "6dPnM@example.com", true);

let loginUser = (email: string, password: string, isPaid: boolean = false) => {
  console.log("Email: ", email);
  console.log("Password: ", password);
};

loginUser("6dPnM@example.com", "password");

// console.log(getUpper("hello")); // HELLO
// console.log(addTwo(2)); // 4

function getValue(myVal: number): boolean {
  if (myVal > 10) {
    return true;
  } else {
    return false;
  }
}

const getHello = (s: string): string => {
  return `Hello ${s}`;
};

const heros = ["Superman", "Batman", "Spiderman"];
// const heros = [1, 2, 3, 4];

heros.map((hero: string) => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
  // return `Error: ${errmsg}`;
}

function handleError(errmsg: string): never {
  console.log(errmsg);
  throw `Error: ${errmsg}`;
}

export {};
