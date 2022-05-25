let library = []
let index=1

async function getLibrary(){
    const response = await fetch("books.json")
    if(!response.ok){
        const message = `An error has occured: ${response.status}`
        throw new Error(message)
    }
    library = await response.json()
    // add an id number for each entry
    library.forEach((item,index) =>{
        item.id = index + 1;
    })

    return library
}

getLibrary().then(library=>{
    console.log(library)
    document.getElementById("container").innerHTML = `${library.map(getBookHTML).join('')}`

})

function getBookHTML(book){
    return `
    <div class="book">
    <div class="author">${book.author}</div>
    <div class="title">${book.title}</div>
    </div>`
}
