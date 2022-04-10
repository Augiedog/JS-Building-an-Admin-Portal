const { json } = require("express/lib/response");

// Your Code Here

async function getBookList(){
    let response = await fetch('http://localhost:3001/listbooks')
    let bookList = 
}





// let response = await fetch('http://localhost:3001/updateBook', {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'application/json'

//     },
//     body: JSON.stringify({
//         "id": 3,
//         "title": "Legends Arathrea",
//     }),
// })
// let updateBook = await response.json();
// console.log(updateBook)