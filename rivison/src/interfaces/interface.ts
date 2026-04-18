type ChaiOrder = { type: string; sugar: number; strong: boolean };

// function makeChai(order: { type: string; sugar: number; strong: boolean }) {
//   console.log(order);
// }

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

type TeaRecipe = {
  water: number;
  milk: number;
};

interface TeaRecipeInterface {
  water: number;
  milk: number;
}

class MasalaChai implements TeaRecipe {
  water: number = 2;
  milk: number = 23;
}

// type cupSize = "SMALL" | "LARGE"; // literal types
interface cupSize {
  size: "SMALL" | "LARGE";
}

class Chai implements cupSize {
  size: "SMALL" | "LARGE" = "LARGE";
}

// type Response = { ok: true } | { ok: false };
type Response = { ok: true } | { ok: false };

class Res {
  ok: true = true;
}

type TeaType = "MASALA" | "GINGER" | "LEMON";

function orderChai(t: TeaRecipe) {
  console.log(t);
}

type BaseChai = { teaLeaaves: number };

type Extra = { masala?: number };

type MasalaChai2 = BaseChai & Extra;

const cup: MasalaChai2 = {
  teaLeaaves: 2,
  masala: 2,
};

type User = {
  username: string;
  bio?: string;
};
const u1: User = {
  username: "kishan",
};

type Config = {
  readonly appName: string;
  version: number;
};

const cfg: Config = {
  appName: "MasterJI",
  version: 1.2,
};
