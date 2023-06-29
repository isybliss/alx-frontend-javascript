export default function createIteratorObject(report) {
  const iter = [];
  for (const arr of Object.keys(report)) {
    iter.push(arr);
  }

  return iter;
}
