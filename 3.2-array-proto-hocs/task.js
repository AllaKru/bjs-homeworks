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
  let memory = [];
  let object = {};
  object.args = [];

  return function fn(...args) {
    object.result = fn(...args); // object.result = sum(...args);
    function find() {
      if (compareArrays(object.args, args) === true) {
        return object.result;
      }
    }
    fn(...args); //sum(...args);
    object.args.push(args);

    memory.push(object);

    if (memory.length > limit) {
      memory.shift(0);
    }
    return object.result;
  };
}

const mSum = memorize(sum, 2);
