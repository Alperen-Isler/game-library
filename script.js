const myLibrary = [];

function Book(name, author, pages, read){
    if(!new.target){
        throw Error("you must use the 'new' operator to call the constructor")
    }
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
    if(read === true){
        this.read = "read"
    } else if (read === false){
        this.read = "not read"
    };
};

function addBooktoLibrary(name, author, pages, read){
    return myLibrary.push(new Book(name, author, pages, read));
};
