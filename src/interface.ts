interface Chai {
  name: string;
  type: string;
  sugar: boolean;
}
const masalaChai: Chai = {
  name: "Masala Chai",
  type: "Black Tea",
  sugar: true,
};
interface Shop {
  readonly shopName: string;
  location: string;
  getChaiDetails(chai: Chai): string; // Function type in interface
}
// interface defines the structure of an object, not the implementation
const myShop: Shop = {
  shopName: "Chai Point",
  location: "Downtown",
  getChaiDetails(chai: Chai): string {
    return `Welcome to ${this.shopName} located at ${this.location}. We serve delicious ${chai.name} made from ${chai.type} with sugar: ${chai.sugar}.`;
  },
};
console.log(myShop.getChaiDetails(masalaChai));

interface Machine {
  start(): void;
  stop(): void;
}
class TeaMachine implements Machine {
  start(): void {
    console.log("Tea Machine Started");
  }
  stop(): void {
    console.log("Tea Machine Stopped");
  }
}
interface User {
    readonly id: number;
}
interface User {
    name: string;
}
const user1: User = {
    id: 1,
    name: "Rahul"
};// Merged interface
console.log(user1);