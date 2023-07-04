export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0 || typeof set !== 'object') {
    return '';
  }
  const filteredArr = Array.from(set).filter((value) => value.startsWith(startString));
  const cleanArr = filteredArr.map((value) => value.slice(startString.length));
  return cleanArr.join('-');
}
