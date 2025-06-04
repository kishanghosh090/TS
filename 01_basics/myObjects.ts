const User = {
  name: "kishan",
  email: "kishan@gmail.com",
  isActive: true,
};

function createUser(user: { name: string; email: string; isActive: boolean }) {
  console.log(user);
  console.log(user.name);
  //   console.log(user.email);
}
// createUser({name: "kishan", isActive: true, email: "kishan@gmail.com"});
createUser(User);

function createCourse(): { name: string; isPaid: boolean; price: number } {
  return {
    name: "React",
    isPaid: true,
    price: 100,
  };
}
const course = createCourse();
// console.log(course);
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
};

function createUser2(user: User) {
  console.log(user);
  console.log(user.name);
  console.log(user.email);
}
let myUser: User = {
  _id: "abc123",
  name: "kishan",
  email: "kishan@gmail.com",
  isActive: true,
};

createUser2(myUser);

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardHolder: string;
};

type cardDetails = cardNumber & cardDate & { cvv: number };

export {};
