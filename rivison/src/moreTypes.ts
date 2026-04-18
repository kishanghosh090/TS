let response: any = "42";

// forcefull type assertation
let numeric: number = (response as string).length;

type Book = {
  name: string;
};

let bookString = `{"name" : "who moved my cheese"}`;

let bookObject = JSON.parse(bookString) as Book | undefined;

console.log(bookObject?.name);

const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any;

value = "chai";
value = 1212;
value = {};

value.toUpperCase();

let myVal: unknown;

myVal = "chai";
myVal = 1212;
myVal = {};

// myVal.toUpperCase();//'myVal' is of type 'unknown'.ts(18046)

if (typeof myVal == "string") {
  myVal.toLocaleUpperCase();
}

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}

const data: unknown = "chai aur code";

const strData: string = data as string;

type Role = "admin" | "user";

function redirsctBasedOnRole(role: Role): void {
  if (role == "admin") {
    console.log("Redirecting to admin dashboard");
    return;
  }
  if (role == "user") {
    console.log("Redirecting to user dashboard");
    return;
  }
}
