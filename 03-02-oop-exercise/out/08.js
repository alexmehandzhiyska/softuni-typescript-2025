"use strict";
// Create a class Book with:
// •	readonly property title
// •	readonly property author
// Once set through the constructor, these values should not be changed.
class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
const book = new Book("1984", "George Orwell");
console.log(`${book.title} by ${book.author}`);
//# sourceMappingURL=08.js.map