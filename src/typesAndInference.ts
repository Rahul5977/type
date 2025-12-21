type ChaiOrder = {
    type: string;
    sugar: boolean;
};
function serveChai(order: ChaiOrder) {
    console.log(`Serving ${order.type} chai with sugar: ${order.sugar}`);
}

function makeChai(order: ChaiOrder) {
    console.log(`Making ${order.type} chai with sugar: ${order.sugar}`);
}

interface User {
    name: string;
    age: number;
    isAdmin: boolean;
}
class Person implements User {
    name: string;
    age: number;
    isAdmin: boolean;

    constructor(name: string, age: number, isAdmin: boolean) {
        this.name = name;
        this.age = age;
        this.isAdmin = isAdmin;
    }
}