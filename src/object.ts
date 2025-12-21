const chaiObj = {
  name: "Chai",
  type: "Masala",
  sugar: true,
};

console.log(
  `I like ${chaiObj.name} of type ${chaiObj.type} with sugar: ${chaiObj.sugar}`
);

let userinput: {
  username: string;
  password: string;
  isAdmin: boolean;
} = {
  username: "rahul",
  password: "securepassword",
  isAdmin: true,
};

console.log(`Username: ${userinput.username}, Is Admin: ${userinput.isAdmin}`);

type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

let product1: Product = {
  id: 101,
  name: "Tea",
  price: 10.5,
  inStock: true,
};
let product2 = {
  id: 102,
  name: "Coffee",
  price: 15.0,
  inStock: false,
  hello: "world",
};
product1 = product2;
console.log(
  `Product: ${product1.name}, Price: ${product1.price}, In Stock: ${product1.inStock}`
);

type Tea = {
  name: string;
  type: string;
  sugar: boolean;
};
const updateChai = (tea: Partial<Tea>) => {
  console.log(tea);
};
updateChai({ name: "Green Tea" });

const prepareChai = (tea: Required<Tea>) => {
  console.log(
    `Preparing ${tea.name} of type ${tea.type} with sugar: ${tea.sugar}`
  );
};
prepareChai({ name: "Black Tea", type: "Masala", sugar: true });
