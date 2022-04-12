// Your Code Here
async function main() {
    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()
    books.forEach(renderBook)
}

function renderBook(book) {
    let root = document.querySelector('#root')
    let li = document.createElement('li')
    li.textContent = book.id
    let titleChange = document.createElement('input')
    titleChange.value = book.title
    let quantityInput = document.createElement('input')
    quantityInput.value = book.quantity
    let changeDescription = document.createElement('textarea')
    changeDescription.value = book.description
    let saveButton = document.createElement('button')
    saveButton.textContent = 'Update'
    saveButton.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                title: titleChange.value,
                quantity: quantityInput.value,
                description: changeDescription.value,

            })
        })
    })

    li.append(titleChange, quantityInput, changeDescription, saveButton)

    root.append(li)
}

main();

// async function getBookList(){
//     let response = await fetch('http://localhost:3001/listbooks')
//     let bookList = await response.json()
//     bookList.forEach(makeABook)
// }

// function makeABook(bookList) {
//     let root = document.querySelector('#root')
//     let li = document.createElement('li')
//     li.textContent = book.title

//     let quantityInput = document.createElement('input')
//     quantityInput.value = book.quantity

//     let saveButton = document.createElement('button')
//     saveButton.textContent = 'Save'

//     saveButton.addEventListener('click', () => {
//         fetch('http://localhost:3001/updateBook', {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 id: book.id,
//                 quantity: quantityInput.value
//             })
//         })
//     })

//     li.append(quantityInput, saveButton)

//     root.append(li)
// }

// getBookList();




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