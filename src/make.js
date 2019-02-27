module.exports = function make(...args) {
  const array = [];
  
  function inner() {
    if (typeof arguments[0] === "function") {
      return array.reduce(arguments[0]);
    } else {
      array.push(...arguments);
      return inner;
    }
  }

  return inner(...args);
}