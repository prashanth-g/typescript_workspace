// Basics
var language = "Typescript";
function printLanguage(language) {
    console.log(language);
}
printLanguage(language);
function printUser(user) {
    console.log("Hello " + user.firstName + " " + user.lastName);
}
var user = { firstName: "Xin", lastName: "Xong" };
printUser(user);
// Class
var Employee = /** @class */ (function () {
    function Employee(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Employee;
}());
function printUser01(customer) {
    console.log("Hello, " + customer.firstName + " " + customer.lastName);
}
var user01 = new Employee("Makiyo", "D.", "Juki");
printUser01(user01);
