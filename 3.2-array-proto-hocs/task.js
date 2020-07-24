function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
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
    object.result = fn(...args);

    const obj1 = memory.find(function find(object) {
      if (compareArrays(args, object.args)) {
        return object;
      }
    });
    if (obj1 === undefined) {
      object.args.push(...args);
      memory.push(object);
      if (memory.length > limit) {
        memory.shift();
      }
      return object.result;
    } else return obj1.result;
  };
}
