const chaiFlav: string[] = ["Masala", "Elaychi"];

const chaiPrice: number[] = [23, 4443, 43434];

const rating: Array<number> = [323, 323];

type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  {
    name: "Masala",
    price: 120,
  },
  {
    name: "Elychi",
    price: 130,
  },
  {
    name: "ginger",
    price: 110,
  },
];

const cities: readonly string[] = ["Delhi", "jaipur"];

cities.at(1);

const table: number[][] = [[], []];

let chaiTuple: [string, number] = ["masala", 20];
chaiTuple[0] = "";

const location: readonly [number, number] = [23, 23];

const chaiItems: [name: string, price: number] = ["masala", 23];

enum Status {
  SUCCESS = 200,
  ERROR = 500, // if not given auto inc from prev -> 201
}

const res = Status.SUCCESS;

enum ChaiTypes {
  MASALA = "masala",
  GINGER = "ginger",
}

function makeChai(type: ChaiTypes) {
  console.log(type.valueOf());
}

makeChai(ChaiTypes.GINGER);

const enum RandomEnum {
  ID = 1,
  NAME = "chai",
}

let t: [string, number] = ["chai", 10];
t.push("extra");
