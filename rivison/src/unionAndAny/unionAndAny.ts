let subs: number | string = "1M"; //UNION

// not good ... tooo bad
let anyType: any;
anyType = 2323;
anyType = "";

let apiRequestStatus: "PENDING" | "SUCCESS" | "ERROR";

apiRequestStatus = "PENDING";

enum res {
  PENDING,
  SUCCESS,
  ERROR,
}

let response: res;

response = res.PENDING;

const orders = ["12", "20", "28", "42"];
let currentOrder: string | undefined;

for (const el of orders) {
  if (el === "28") {
    currentOrder = el;
    break;
  }
  currentOrder = "32";
}
// currentOrder = 23;

console.log(currentOrder);
