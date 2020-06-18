"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(parseFloat(percent))) {
    return `Параметр "Процентная ставка" содержит неправильное значение ${percent}.`;
  } else if (isNaN(parseFloat(contribution))) {
    return `Параметр "Cумма первоначального взноса" содержит неправильное значение ${contribution}.`;
  } else if (isNaN(parseFloat(amount))) {
    return `Параметр "Cумма кредита" содержит неправильное значение ${amount}.`;
  } else if (isNaN(date)) {
    return `Параметр "Дата окончания кредита" содержит неправильное значение ${date}.`;
  } else {
    let bodyCredit = amount - contribution;
    let months =
      (date.getFullYear() - new Date().getFullYear()) * 12 +
      (date.getMonth() - new Date().getMonth());
    let P = percent / 12 / 100;
    let monthAmount = bodyCredit * (P + P / (Math.pow(1 + P, months) - 1));
    let totalAmount = parseFloat((monthAmount * months).toFixed(2));
    console.log(totalAmount);
    return totalAmount;
  }
}

function getGreeting(name) {
  if (!name || name === "null" || name === "undefined") {
    name = "Аноним";
  }
  let greeting = `Привет, мир! Меня зовут ${name}`;
  console.log(greeting);
  return greeting;
}
