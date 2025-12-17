"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(id, name, address) {
        this.address = address;
        this.id = id;
        this.name = name;
    }
    Employee.prototype.getNameWithAddress = function () {
        return this.name + " " + this.address;
    };
    Employee.getPi = function () {
        return Math.PI;
    };
    return Employee;
}());
var john = new Employee(1, "John", "Address");
john.id = 1;
john.name = "John";
john.address = "Highway 71";
console.log(john);
console.log(john.getNameWithAddress());
console.log(Employee.getPi());
