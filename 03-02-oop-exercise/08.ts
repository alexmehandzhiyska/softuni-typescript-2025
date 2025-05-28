// Create a class Book with:
// •	readonly property title
// •	readonly property author
// Once set through the constructor, these values should not be changed.

class Book {
    public readonly title: string;
    public readonly author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
}

const book = new Book("1984", "George Orwell");
console.log(`${book.title} by ${book.author}`);
