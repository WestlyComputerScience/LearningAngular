"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
// simple typescript function
function add(a, b, c, d) {
    if (d === void 0) { d = 10; }
    console.log(d);
    return c ? a + b + c : a + b; // if c exists, add it with a and b, otherwise just add a and b (single line if-else statement)
}
// void doesn't return anything
// function add(a: number, b: number): void {
//     return a + b; // should give an error
// }
var sub = function (num1, num2) { return num1 - num2; }; // arrow function
console.log(sub(2, 3));
function add2(num1, num2) {
    var num3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        num3[_i - 2] = arguments[_i];
    }
    return num1 + num2 + num3.reduce(function (a, b) { return a + b; }, 0); // this allows us to add the first 2 numbers with the Rest Parameter to then call reduce (callbacks for everything in the function) and add all numbers in the array
}
var nums = [1, 2, 3, 4, 5];
console.log(add2.apply(void 0, __spreadArray([2, 3], nums, false))); // this is how to pass a Rest Parameter
function getItems(items) {
    return new Array().concat(items);
}
var concatResult = getItems([1, 2, 3, 4, 5]);
var concatString = getItems(["a", "b", "c", "d", "e"]);
// if a file has at least one import/export, then it's a module (making it file-scoped)
