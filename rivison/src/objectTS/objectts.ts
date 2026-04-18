const chai = {
  name: "kishan",
  price: 20,
  isHot: true,
};

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "",
  price: 102,
  isHot: "" === "",
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "alychi",
  price: 25,
  ingredients: ["alychi", "milk", "water", "masala"],
};

type Cup = { size: number };

let smallCup: Cup = { size: 20 };
let bigCup = { size: 223, material: "steel" };

smallCup = bigCup; // not have any issue as it have size inside bigCup

type Brew = {
  brewTime: number;
};

const coffee = { brewTime: 5, beans: "arabica" };

const chaiBrew: Brew = coffee;

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "chaicode",
  password: "123",
};

type Item = {
  name: string;
  qty: number;
};

type Address = {
  street: string;
  pin: number;
};

// Orders & Chai
type Order = {
  id: string;
  items: Item[];
  address: Address;
};

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};
const updateChai = (updates: Partial<Chai>) => {
  console.log(`updating chai with ${updates.price}`);
};

updateChai({ price: 25 });
updateChai({}); // its problem we can make it empty

type ChaiOrder = {
  name?: string;
  quantity?: number;
};
//Required -> strictly required although we are using ? inside type declaration we need to give all properties
const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

placeOrder({
  name: "Masala Chai",
  quantity: 12,
});

type MyChai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasicChaiInfo = Pick<MyChai, "name" | "price">;
// Pick we can pick keys which we needed like here we pick only name and price
const chaiInfo: BasicChaiInfo = {
  name: "",
  price: 90,
};

type BasicChaiInfo2 = Omit<MyChai, "name" | "price">;
// remove we can pick keys which we needed like here we remove name and price

const chaiInfo2: BasicChaiInfo2 = {
  isHot: true,
  ingredients: ["elychi", "milk"],
};
