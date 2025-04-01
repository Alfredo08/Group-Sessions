let book = {
    title: "The beginning after the end.",
    authors: ["Alex Miller", "Martha Smith"],
    chapters: 14,
    editor: "CareerFoundry"
};

/*
console.log(book);
console.log(book.title, book.editor);
console.log(book["title"]);
book.language = "English";
console.log(book);
*/

for(let key in book){
    console.log(key, book[key]);
}

