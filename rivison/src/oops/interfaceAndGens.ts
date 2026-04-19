interface Chai {
  flavour: string;
  price: number;
  milk?: boolean;
}

const masala: Chai = {
  flavour: "masala",
  price: 20,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = {
  id: 1,
  name: "chai code caffee",
};

// s.id;

interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (p: number): number => {
  return p * 0.5;
};

interface TeaMachine {
  start(price: number): void;
  stop(): void;
}

const machine: TeaMachine = {
  start: function (price: number): void {
    throw new Error("Function not implemented.");
  },
  stop: function (): void {
    throw new Error("Function not implemented.");
  },
};

// index signature

interface ChaiRating {
  [flavour: string]: number;
}

const rating: ChaiRating = {
  masala: 4.5,
  ginger: 4.5,
};

interface User {
  name: string;
}

interface User {
  age: number;
}

const u: User = {
  name: "KISHAN",
  age: 10,
};

