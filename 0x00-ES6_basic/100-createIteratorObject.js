export default function createIteratorObject(report) {
  const iter = [];
  for (const arr of Object.values(report.allEmployees)) {
    iter.push(arr);
  };

  return iter;
}
