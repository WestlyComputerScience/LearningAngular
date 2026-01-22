import { Login, IUser } from './interfaces.ts'; //imports our interface
import * as UserLogin from './interfaces.ts' //Now everytime we call something from this import, we need to do refer everything with UserLogin (i.e. UserLogin.Login to implement the Login interface)

class Employee implements UserLogin.Login{ //gives us an error since we haven't implemented Login(): boolean
    id: number
    name: string
    address: string

    constructor(id: number, name: string, address: string) {
        this.address = address;
        this.id = id;
        this.name = name;
    }

    getNameWithAddress(): string {
        return this.name + " " + this.address;
    }

    static getPi() { // static members that can be called with class name
        return Math.PI;
    }
}

let john = new Employee(1, "John", "Address");

john.id = 1;
john.name = "John";
john.address = "Highway 71";

console.log(john);

console.log(john.getNameWithAddress());

console.log(Employee.getPi());

export { }