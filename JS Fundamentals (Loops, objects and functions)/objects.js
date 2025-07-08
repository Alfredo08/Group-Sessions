
let book = {
    title: "Book A",
    authors: ["Author 1", "Author 2"],
    chapters: 25,
    languages: ["English", "French", "Spanish"]
};

for(let i = 0; i < book.languages.length; i ++){
    console.log(book.languages[i]);
}

/*
console.log(book.title);
book.title = "Book AB"
console.log(book["title"])
console.log(book);

for(let property in book){
    console.log(property, book[property]);
}
    */