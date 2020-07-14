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
    this.avgData = new Object();
  }
  getName() {
    return this.name;
  }

  // addGrade(grade, subject) {
  //   if (grade < 1 || grade > 5 || isNaN(grade)) {
  //     console.log(
  //       `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`
  //     );
  //     return this.avgData[subject].length;
  //   } else {
  //     this.avgData[subject] = [];
  //     for (let subject in this.avgData) {
  //       this.avgData[subject].push(grade);
  //     }
  //   }
  //   return this.avgData[subject].length;
  // }

  addGrade(grade, subject) {
    if (grade < 1 || grade > 5 || isNaN(grade)) {
      console.log(
        `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`
      );
    } else if (this.avgData[subject] === undefined) {
      this.avgData[subject] = [];
      this.avgData[subject].push(grade); //Без этой проверки получается так,
      //  что каждый раз при добавлении новой оценки масси
      //  в под оценки создаётся заново и старая информация затирается.
    } else {
      this.avgData[subject].push(grade);
    }
    return this.avgData[subject].length;
  }
  getAverageBySubject(subject) {
    let summ = 0;
    //Это условие никогда не будет выполняться, потому что цикл for (let subject in this.avgData) { } шагает только по существующим
    //  свойствам объектам this.avgData. 0 никогда не будет возвращён.
    //Т.к. мы всё ещё на первом шаге цикла for (let subject in this.avgData) { }, то указанный выше код считает оценку по первому предмету, возвращает её и всё, программа завершает работу,
    //так никогда и не добравшись до второго предмета и всех последующих.
    //Что делать? Убрать цикл, так как он вовсе не нужен. По ключу this.avgData[subject] вы можете и проверить наличие
    //оценок по предмету как таковое, и перебрать массив этих оценок.
    if (this.avgData[subject] === undefined) {
      return 0;
    }
    for (let i = 0; i < this.avgData[subject].length; i++) {
      summ += this.avgData[subject][i];
    }
    return summ / this.avgData[subject].length;
  }

  getTotalAverage() {
    let summAver = 0;
    let count = 0;

    for (let subject in this.avgData) {
      if (Array.isArray(this.avgData[subject])) {
        count++;
        summAver += this.getAverageBySubject(subject); // this[subject] - не сработало
      } else if (this.avgData[subject].length === 0) {
        return 0;
      }
    }
    return summAver / count;
  }
}

const log = new StudentLog("Олег Никифоров");
