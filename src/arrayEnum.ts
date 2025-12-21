const chaiFlavour: string[] = ["vanilla", "chocolate", "strawberry"];
type Chai = {
  name: string;
  type: (typeof chaiFlavour)[number];
};
let myChai: Chai[] = [
  { name: "Chai1", type: "vanilla" },
  { name: "Chai2", type: "chocolate" },
  { name: "Chai3", type: "strawberry" },
];
console.log(myChai);

const cities: readonly string[] = ["New York", "Los Angeles", "Chicago"];
// cities.push('Houston'); // Error: Cannot add to a readonly array
console.log(cities);

let userinfo: [string, number, boolean?] = ["rahul", 25]; // Tuple type
console.log(`Username: ${userinfo[0]}, Age: ${userinfo[1]}`);
userinfo.push("raj"); // Allowed: push is allowed on tuples
console.log(
  `After push - Username: ${userinfo[0]}, Age: ${userinfo[1]}, Extra: ${userinfo[2]}`
);

let coordinates: readonly [number, number] = [40.7128, -74.006]; // Readonly tuple
// coordinates[0] = 41.0; // Error: Cannot modify a readonly tuple
console.log(`Latitude: ${coordinates[0]}, Longitude: ${coordinates[1]}`);

//named tuples
type Product = {
  id: number;
  name: string;
  price: number;
  dimensions: [width: number, height: number, depth: number]; // Named tuple elements
};
let product: Product = {
  id: 1,
  name: "Tea",
  price: 10.5,
  dimensions: [10, 15, 5],
};
console.log(
  `Product: ${product.name}, Dimensions (WxHxD): ${product.dimensions[0]}x${product.dimensions[1]}x${product.dimensions[2]}`
);

enum Size {
  Small = "SMALL",
  Medium = "MEDIUM",
  Large = "LARGE",
}
let tshirtSize: Size = Size.Medium;
console.log(`T-shirt Size: ${tshirtSize}`);

enum Status {
  pending = 100,
  inProgress, // 101
  completed, // 102 - auto-incremented
}
let taskStatus: Status = Status.completed;
console.log(`Task Status: ${taskStatus}`);
