function getChai(kind: string | number) {
  if (typeof kind == "string") {
    return `making ${kind.toLocaleUpperCase()} chai`;
  }

  return `number of chai to be process ${kind}`;
}

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default masala chai ${msg}`;
}

function orderChai(size: "medium" | "small" | "large" | number) {
  if (size == "small") {
    return `small chai`;
  }
  if (size == "medium" || size == "large") {
    return `extra`;
  }
  if (typeof size == "number") {
    return size + 1;
  }
}

class AlychiChai {
  serve() {
    return `serving kulad chai`;
  }
}
class Cutting {
  serve() {
    return `serving Cutting chai`;
  }
}

function serve(chai: AlychiChai | Cutting) {
  if (chai instanceof AlychiChai) {
    return chai.serve;
  }
  return chai.serve;
}

type ChaiOrder = {
  type: string;
  suagr: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj != null &&
    typeof obj.type == "string" &&
    typeof obj.sugar == "string"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} with ${item.suagr}`;
  }
  return `serving custom chai`;
}
type MasalaChai = { type: "masala"; spiceLevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(chai: Chai) {
  switch (chai.type) {
    case "elaichi":
      break;
    case "masala":
      break;
    case "ginger":
      break;
    default:
      break;
  }
}

function brew(order: MasalaChai | GingerChai) {
  if ("spiceLevel" in MakeChai) {
  }
}

function isStringArray(arr: unknown): arr is string[] {
    
}
