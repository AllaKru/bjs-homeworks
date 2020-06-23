"use strict";
String.prototype.isPalindrome = function () {
  let newstr = this.toLowerCase().replace(new RegExp(" ", "g"), "");
  let newreverse = newstr.split("").reverse().join("");

  return newstr === newreverse;
};

function getAverageMark(marks) {
  let summ = 0;
  if (marks.length === 0 || Number.isNaN(marks)) {
    return 0;
  }
  for (let i = 0; i < marks.length; i++) {
    summ += marks[i];
  }
  let average = parseFloat(summ / marks.length);
  let roundedAverage = Math.round(average);
  return roundedAverage;
}

function checkBirthday(birthday) {
  let now = Date.now(); //Number(new Date())// +new Date()
  let birth = Date.parse(birthday);
  let diff = now - birth;
  let age = diff / 31557600000;
  // let age = (now -(diff/4 + birth))/31557600000;
  let verdict = age > 18 ? true : false;
  return verdict;
}
