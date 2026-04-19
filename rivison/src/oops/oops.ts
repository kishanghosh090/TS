class Chai {
  private flavour: string;
  private price: number;

  constructor(flavour: string, price: number) {
    this.flavour = flavour;
    this.price = price;
    console.log(this);
  }

  getPrice(): number {
    return this.price;
  }
}

const masalaChai = new Chai("masala", 20);

class Shop {
  protected shopName = "Chai corner";
}

class Branch extends Shop {
  #balance = 100;
  getName() {
    return this.shopName;
  }
  getBalance() {
    return this.#balance;
  }
}
const b = new Branch();

console.log(b.getName());

class Cup {
  readonly capacity: number = 250;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

class MordernChai {
  private _sugar: number = 2;
  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    this._sugar = value;
  }
}

class EkChai {
  static shopName = "ChaiCode caffe";
  constructor(public faluvour: string) {}
}

console.log(EkChai.shopName);

abstract class Drink {
  abstract make(): void;
  abstract throw(): void;
}

class MyChai extends Drink {
  throw(): void {
    throw new Error("Method not implemented.");
  }
  make(): void {
    throw new Error("Method not implemented.");
  }
}

// compositation
class Heater {
  heat() {}
}

class ChaiMaker {
  constructor(private heater: Heater) {}
  make() {
    this.heater.heat();
  }
}

