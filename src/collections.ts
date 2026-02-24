let numbers: number[] =[10,20,30]
numbers.push(40)
// numbers.push("fifty")

let mixedArray : (number | string)[] = [1,"hello",12]

let coordinates :[number, number, string]=[124.5,235.8,"Demo Label"]
console.log(coordinates[2])
// Declare an array `numbers` of type `number[]` and initialize it with `[10, 20, 30]`.
// Use `push()` to add `40` to `numbers`.
// Try to push a string `"fifty"` into the `numbers` array. Observe the error.
// Declare an array `mixedArray` that can hold either numbers or strings. 
// Initialize it with `[1, "hello", 2, "world"]`.
// Declare a tuple `coordinates` that holds `[number, number, string]` (e.g., latitude, longitude, label). Initialize it with `[40.7128, -74.0060, "NYC"]`.
// Access and print the label from `coordinates`.