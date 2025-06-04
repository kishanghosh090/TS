const superHeros: string[] = [];
const heroPower: Array<number> = [];

type User = {
  name: string;
  isActive: boolean;
};

// const allUsers: Array<User> = [];
const allUsers: User[] = [];

const MLModels: number[][] = [
  [233, 45, 23],
  [344, 34, 45],
];
superHeros.push("Iron");
superHeros.push("Spider");
superHeros.push("Thor");
// superHeros.push(12)

heroPower.push(100);

allUsers.push({ name: "Iron", isActive: true });
allUsers.push({ name: "Spider", isActive: false });
// allUsers.push(12) // error because it is not an object we are pushing and we declared it as an object in the type : User

export {};
