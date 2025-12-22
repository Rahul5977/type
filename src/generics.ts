//generics are template that can be used with different types without losing the type information.

function identity<T>(arg: T): T[] {
    return [arg];
}// T -> type parameter
console.log(identity<string>("Hello")); // ["Hello"]
console.log(identity<number>(42)); // [42]