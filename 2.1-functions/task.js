"use strict";
//Задача 1
function getSolutions(a, b, c) {
  let D = Math.pow(b, 2) - 4 * a * c;
  if (D < 0) {
    return { D: D, roots: [] };
  } else if (D === 0) {
    const x1 = -b / (2 * a);
    return { D: D, roots: [x1] };
  } else if (D > 0) {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    return { D: D, roots: [x1, x2] };
  }
}
function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D < 0) {
    console.log(`Уравнение не имеет вещественных корней`);
  } else if (result.D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else {
    console.log(
      `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`
    );
  }
}
//Задача 2
function getAverageScore(data) {
  // let inputData = {
  //   algebra : [4, 5, 5, 4],
  //   geometry : [2, 5],
  //   russian : [3, 3, 4, 5],
  //   physics : [5, 5],
  //   music : [ 2, 2, 5],
  //   english : [4, 4, 3, 3],
  //   poetry : [5, 3, 4],
  //   chemistry : [2],
  //   french : [4, 4]
  // };
  let avgData = {};
  let avr = [];
  let average;
  for (let prop in data) {
    avr.push(getAverageMark(data[prop]));
    avgData.average = getAverageMark(avr);
    avgData[prop] = getAverageMark(data[prop]);
    // if (avgData[prop].length === 0) {
    //   return 0;
    // }
  }
  return avgData;
}

function getAverageMark(marks) {
  let summ = 0;
  if (marks.length === 0 || Number.isNaN(marks)) {
    return 0;
  }
  for (let i = 0; i < marks.length; i++) {
    summ += marks[i];
  }

  return parseFloat(summ / marks.length);
}

//Задача 3
function getPersonData(secretData) {
  let arr = {};

  for (let prop in secretData) {
    arr["firstName"] = getDecodedValue(secretData.aaa);
    arr["lastName"] = getDecodedValue(secretData.bbb);
  }
  return arr;
}

function getDecodedValue(secret) {
  if (secret === 1) {
    return `Эмильо`;
  } else if (secret === 0) {
    return `Родриго`;
  }
}
