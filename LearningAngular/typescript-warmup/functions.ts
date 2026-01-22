// simple typescript function
function add(a: number, b: number, c?: number, d = 10): number { // the third parameter is optional (d has a default value of 10 if none is passed)
    console.log(d);
    return c ? a + b + c : a + b; // if c exists, add it with a and b, otherwise just add a and b (single line if-else statement)
}

// void doesn't return anything
// function add(a: number, b: number): void {
//     return a + b; // should give an error
// }

const sub = (num1: number, num2: number): number => num1 - num2; // arrow function

console.log(sub(2, 3));

function add2(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0); // this allows us to add the first 2 numbers with the Rest Parameter to then call reduce (callbacks for everything in the function) and add all numbers in the array
}
let nums: number[] = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...nums)); // this is how to pass a Rest Parameter

function getItems<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

let concatResult = getItems([1, 2, 3, 4, 5]);

let concatString = getItems(["a", "b", "c", "d", "e"]);

export { } // forces the file to be treated as a module and not a global script (i.e. if I said x = 5 in a global script, everybody in my folder has access to it)
// if a file has at least one import/export, then it's a module (making it file-scoped)