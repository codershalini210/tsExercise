// Task:

// Create a file named book.ts.

// Define an interface named Book with the following properties:
interface Book{
    title: string;
    author:string;
    pages:number;
}

let mybook:Book ={
    title:"First Book",
    author:"Author1",
    pages:120
}
function printBookDetails(bk :Book):void{
    console.log(`Title : ${bk.title} author : ${bk.author} pages: ${bk.pages}`)
}

printBookDetails(mybook)

// Call the printBookDetails function and pass the myBook object to it.