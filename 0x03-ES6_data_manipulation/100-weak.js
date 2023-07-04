const weakMap = new WeakMap();
let value = 0;
function queryAPI(endpoint) {
  value += 1;
  if (value >= 5) {
    throw Error('Endpoint load is high');
  }
  weakMap.set(endpoint, value);
}

export { weakMap, queryAPI };
