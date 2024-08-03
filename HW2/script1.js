/*Задание 1
Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.*/

class bookLibrary {
    #books = [];
    constructor(books) {
        const setBooks = new Set(books);
        if (books.length == Array.from(setBooks).length) {
          this.#books = books;
        } else {
          throw new Error("some books are repeated");
        }
    }
    get allBooks() {
        return this.#books;
    }
    addBook(title){
        if (this.#books.includes(title)){
            throw new Error('this book is already in library')
        }
        else{
            this.#books.push(title)
        }
    }
    removeBook(title){
        if (this.#books.includes(title)){
            const bookIndex = this.#books.indexOf(title);
            this.#books.splice(bookIndex, 1);
        }
        else{
            throw new Error('this book is not in library')
        }
    }
    hasBook(title){
        if (this.#books.includes(title)) {
            return true;
        } else return false;
    }
}

const lib = new bookLibrary(['1984', 'Brave New World', 'Fahrenheit 451']);
console.log(lib.allBooks);

lib.removeBook('1984');
console.log(lib.allBooks);

lib.addBook('We');
console.log(lib.hasBook('We'));
console.log(lib.allBooks);