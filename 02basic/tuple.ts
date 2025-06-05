const user: (string | number)[] = ["kishan", "hc@gmail.com", 123];

const chai: [string, number, boolean] = ["hc", 123, true]; // tuple in typescript

const person: {
  name: string;
  email: string;
  isActive: boolean;
} = {
  name: "kishan",
  email: "hc@gmail.com",
  isActive: true,
};

let rgb: [number, number, number] = [255, 255, 255];
type User = [number, string];

const newUser: User = [122, "example@gmail.com"];
newUser[1] = "kishan";
// newUser.push(true); // error as it is a tuple
