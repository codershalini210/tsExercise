
let numbers :number[] =[10,12,31]
for(let i=0;i<numbers.length ;i++)
{
    console.log(numbers[i])
}
console.log("---------------------------")
let students:string[]=["Ron","John","Sam","Oxana"]
for(let i=0;i< students.length;i++)
{
    console.log(students[i])
}
let Mixed: (string | number)[] =["1110","Ron",251,"rwe"]
console.log("----------------------------")
for(let i=0;i< Mixed.length;i++)
{
    console.log(Mixed[i])
}
console.log("----------------------")
let userTuple: [number, string, boolean] = [1, "Alice", true];
for(let i=0;i<userTuple.length;i++)
{
    console.log(userTuple[i]+"----")
}