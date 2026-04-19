class Chai {
    flavour;
    price;
    constructor(flavour, price) {
        this.flavour = flavour;
        this.price = price;
        console.log(this);
    }
    getPrice() {
        return this.price;
    }
}
const masalaChai = new Chai("masala", 20);
class Shop {
    shopName = "Chai corner";
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
    capacity = 250;
    constructor(capacity) {
        this.capacity = capacity;
    }
}
class MordernChai {
    _sugar = 2;
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        this._sugar = value;
    }
}
class EkChai {
    faluvour;
    static shopName = "ChaiCode caffe";
    constructor(faluvour) {
        this.faluvour = faluvour;
    }
}
console.log(EkChai.shopName);
class Drink {
}
class MyChai extends Drink {
    throw() {
        throw new Error("Method not implemented.");
    }
    make() {
        throw new Error("Method not implemented.");
    }
}
// compositation
class Heater {
    heat() { }
}
class ChaiMaker {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat();
    }
}
export {};
//# sourceMappingURL=oops.js.map