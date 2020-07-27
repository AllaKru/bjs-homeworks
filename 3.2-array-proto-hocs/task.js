function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {
    return e++;
  }
}
function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return (sum += +arg);
  }, 0);
}

function compareArrays(arr1, arr2) {
  return (
    arr1.every((val, index) => val === arr2[index]) &&
    arr1.length === arr2.length
  );
}

function memorize(fn, limit) {
  const memory = [];
  return (...args) => {
    let object = {};
    object.args = [];

    const searchResult = memory.find((object) =>
      compareArrays(args, object.args)
    );
    if (searchResult) {
      return searchResult.result;
    }
    // object.args.push(...args);
    object.args = args;
    memory.push(object);
    object.result = fn(...args);
    if (memory.length > limit) {
      memory.shift();
    }
    return object.result;
  };
}

const mSum = memorize(sum, 5);
