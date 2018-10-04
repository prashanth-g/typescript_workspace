// Basics
var language: string = "Typescript";

function printLanguage(language: string) {
    console.log(language);
}

printLanguage(language);

// Interface
interface User {
    firstName: string;
    lastName: string;
}

function printUser(user: User) {
    console.log("Hello " + user.firstName + " " + user.lastName);
}

let user = {firstName: "Xin", lastName: "Xong"};

printUser(user);

// Class
class Employee {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Customer {
    firstName: string;
    lastName: string;
}

function printUser01(customer : Customer) {
    console.log("Hello, " + customer.firstName + " " + customer.lastName);
}

let user01 = new Employee("Makiyo", "D.", "Juki");

printUser01(user01);