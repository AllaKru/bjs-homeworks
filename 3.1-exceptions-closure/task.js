"use strict";
const parseCount = (argument) => {
  let result = Number.parseInt(argument);
  if (isNaN(result)) {
    throw new Error("Невалидное значение");
  }
  return result;
};

const validateCount = (argument) => {
  try {
    parseCount(argument);
  } catch (e) {
    return e;
  }
  return parseCount(argument);
};

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }
  getArea() {
    let pp = (this.a + this.b + this.c) / 2;
    let S = Math.sqrt(pp * (pp - this.a) * (pp - this.b) * (pp - this.c));
    // return Number.parseFloat(S.toFixed(3));
    return parseFloat(S.toFixed(3));
  }
}
function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (e) {
    return {
      getPerimeter() {
        return "Ошибка! Треугольник не существует";
      },
      getArea() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
