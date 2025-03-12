let score: number | string = 33

score = 44
score = "55"


type User = {
  name: string,
  id: number
}
type Admin = {
  userName: string,
  id: number
}
let hitesh: User | Admin = {
  name: "kishan",id:232
}

hitesh = {userName: "hc", id:234}

// function getId(id:number | string) {
//   // making some API call
//   console.log(`DB id is${id}`)
// }

getId(234)
getId("324")

function getId(id:number | string) {
  if(typeof id == "string"){
    id.toUpperCase()
  }
}

const data: number[] = [1,2,3,"4"]
const data2: (number | string)[] = ["1","34","4"]

let pi:3.14 = 3.14


let seatAllotment: "aisle" | "middle" | "window"
