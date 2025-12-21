type Chai = {
  name: string;
  type: string;
  sugar: boolean;
  price: number;
};
function getChaiPrice(chai: Chai): number {
  return chai.price;
}

let chaiItem: Chai = {
  name: "Masala Chai",
  price: 20,
  sugar: true,
  type: "Spicy",
};
console.log(`Chai Price: ${getChaiPrice(chaiItem)}`);

function makeChai(): void {
  console.log("Chai is being made...");
  return;
}
