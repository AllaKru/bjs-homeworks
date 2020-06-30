"use strict";
//Задача № 1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = 1.5 * this.state;
  }

  set state(newState) {
    if (newState < 0) {
      this.state = 0;
    } else if (newState > 100) {
      this.state = 100;
    } else {
      this._state = newState;
    }
  }
  get state() {
    return this._state;
  }
}
//----------------------------------------------
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state, type);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state, type);
    this.author = author;
    this.type = "book";
  }
}
//-----------------------------------------------------
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = "detective";
  }
}
//-------------------------------------------

const picknick = new NovelBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);
//Задача №2
class Library {
  constructor(name) {
    this.name = name;
    this.books = new Array();
    this.state = 100; // срабатывает при указании state
  }

  addBook(book) {
    if (this.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        return this.books.splice([i], 1)[0];
      }
    }
    return null;
  }
}
const library = new Library("Библиотека имени Ленина");

//Задача №3
class StudentLog {
  constructor(name) {
    this.name = name;
    this.algebra = new Array();
    this.geometry = new Array();
  }
  getName() {
    return this.name;
  }
  addGrade(grade, subject) {
    if (this[subject] === undefined) {
      console.log(
        `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`
      );
      return 0;
    } else if (grade < 1 || grade > 5) {
      // не работает isNaN(this.grade)
       // работает isNaN(grade)
      console.log(
        `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`
      );
      return this[subject].length;
    } else this[subject].push(grade);
    return this[subject].length;
  }
  getAverageBySubject(subject) {
    let summ = 0;
    if (this[subject] === undefined) {
      return 0;
    }
    for (let i = 0; i < this[subject].length; i++) {
      summ += this[subject][i];
    }

    return summ / this[subject].length;
  }
  getTotalAverage() {
    let summAver = 0;
    let count = 0;

    for (let subject in this) {
      if (Array.isArray(this[subject])) {
        count++;
        summAver += this.getAverageBySubject(subject); // this[subject] - не сработало
      } else if (this[subject].length === 0) {
        return 0;
      }
    }
    return summAver / count;
  }
}

const log = new StudentLog("Олег Никифоров");
