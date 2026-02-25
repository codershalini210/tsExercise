interface User {
readonly id: number; // Cannot be changed after creation
firstName: string;
lastName: string;
email?: string; // Optional
registerDate: Date;
// // Method signature
getFullName(): string;
}

const newUser: User = {
id: 1,
firstName: "Jane",
lastName: "Doe",
registerDate: new Date(),
getFullName() {
return `${this.firstName} ${this.lastName}`;
}
};

console.log(newUser.getFullName()); // Jane Doe
newUser.firstName  ="John"
newUser.lastName = "capner"
newUser.email = "John@outlook.com"
console.log(newUser.getFullName())
// newUser.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

// // Object without optional email
const anotherUser: User = {
id: 2,
firstName: "Peter",
lastName: "Jones",
registerDate: new Date(),
getFullName() {
return `${this.firstName} ${this.lastName}`;
}
};

function displayUser(user: User):void{
    console.log(`---------${user.getFullName()}-----------`)
    console.log(`${user.email? user.email: "Email not Present"}`)    

}
displayUser(newUser)
displayUser(anotherUser)