let userInput:unknown
userInput = "test"
userInput = 123
if(typeof userInput==='string')
{
    console.log(userInput.toUpperCase())
}
else{
    if(typeof userInput ==='number')
    {
        console.log(userInput*2)
    }
}

let statusCode : number | string
statusCode = 200
statusCode="Success"
// statusCode = true
// Declare a variable `userInput: unknown;`.
// Assign a string `"test"` to `userInput`.
// Assign a number `123` to `userInput`.
// Try to directly call `userInput.toUpperCase()` or `userInput * 2`. Observe the error.
// Now, use a type guard (`if (typeof userInput === 'string')`) to safely call `userInput.toUpperCase()`.
// Similarly, use a type guard (`if (typeof userInput === 'number')`) to safely perform arithmetic on `userInput`.
// Declare a variable `statusCode: number | string;`.
// Assign `200` to `statusCode`. Then assign `"OK"` to `statusCode`.
// Try to assign `true` to `statusCode`. Observe the error.