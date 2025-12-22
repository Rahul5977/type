class Chai {
  flavour: string;
  price: number;
  constructor(flavour: string, price: number) {
    this.flavour = flavour;
    this.price = price;
  }
}

let chai1 = new Chai("vanilla", 10);
console.log(chai1);

class Coffe {
  public flavour: string;
  public price: number;
  private secretIngredient: string;
  constructor(flavour: string, price: number, secretIngredient: string) {
    this.flavour = flavour;
    this.price = price;
    this.secretIngredient = secretIngredient;
  }
  reveal() {
    console.log(`The secret ingredient is: ${this.secretIngredient}`);
    return this.secretIngredient;
  }
}
let coffe1 = new Coffe("mocha", 15, "cinnamon");
coffe1.reveal();
console.log(coffe1.flavour);
// console.log(coffe1.secretIngredient); // Error: Property 'secretIngredient' is private and only accessible within class 'Coffe'.

class Shop {
  protected shopName = "chaishop";
  constructor(shopName: string) {
    this.shopName = shopName;
  }
}
class Location extends Shop {
  display() {
    console.log(`Welcome to ${this.shopName}`);
  }
}
let loc = new Location("The Tea Place");
loc.display();
// console.log(loc.shopName); // Error: Property 'shopName' is protected and only accessible within class 'Shop' and its subclasses.

class Beverage {
  readonly type: string;
  constructor(type: string) {
    this.type = type;
  } // type cannot be changed after initialization
}
let bev = new Beverage("tea");
console.log(bev.type);
// bev.type = "coffee"; // Error: Cannot assign to 'type' because it is a read-only property.

class Dessert {
  static category: string = "Sweet";
  constructor(public name: string, public calories: number) {}
}
console.log(Dessert.category); // Accessing static property without creating an instance -> static property
let dessert1 = new Dessert("Ice Cream", 300);
console.log(dessert1.name, dessert1.calories);

abstract class Drink {
  abstract serve(): void; // abstract method
}
class Juice extends Drink {
  serve() {
    console.log("Serving fresh juice!");
  }
  // give error if serve() is not implemented
}
let juice1 = new Juice();
juice1.serve();