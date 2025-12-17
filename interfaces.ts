// Note: interfaces don't exist in Javascript
export interface IUser { //some conventions have I before the name to represent interfaces
    name: string;
    age?: number;
    id: number;
    email: string;
}

let user: IUser = { name: "Wes", id: 1, email: "" };

// single line of code?
user.name;
user.email;

// Yes
let { name: userName, email }: IUser = { name: "Wes", id: 1, email: "" }; //access name and email from properties (the snippet "name : userName" allows us to use a different name for the variable)

export interface Login { // allows us to export this interface outside of this file class. 
    Login(): IUser // anybody who implements this interface needs to implement this method
}

// array destructuring
// Regular: 
let users: IUser[] = [
    { name: "John", id: 1, email: "" },
    { name: "John2", id: 2, email: "" },
    { name: "John3", id: 3, email: "" }
]

let [user1, user2] : IUser[] = [ // grabs the first 2 users from this array
    { name: "John", id: 1, email: "" },
    { name: "John2", id: 2, email: "" },
    { name: "John3", id: 3, email: "" }
]

// or can use a function

let result = users.filter(user => user.id > 2); // only gets users with an id > 2

export { }
