//optional parameter
function sendEmail(to:string,body:string,subject?:string):void {
    const finalSubject = subject ? subject:"No Subject"
    console.log(`sending email to : ${to} subject: ${finalSubject}`)
    console.log(`body: ${body}`)
    // condition ? this part executes if condition is true: when condition is false
}
sendEmail("john@gmail.com","sljfl klsjdfsdflksdfksdjfjf","Invitation")
sendEmail("Ron@gmail.com","some content ")

// Demonstrate Default:
function calculateDiscount(price: number, discountPercentage: number = 0.1): number {
return price * (1 - discountPercentage);
}
console.log(calculateDiscount(100)); // 10% discount
console.log(calculateDiscount(100, 0.25)); // 25% discount
// Demonstrate Rest:
function concatenateStrings(...args: string[]): string {
return args.join(" ");
}
console.log(concatenateStrings("Hello", "TypeScript", "World"));
console.log(concatenateStrings("One"));
console.log(concatenateStrings("Typesscript","functions"));
 