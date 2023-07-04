export default function getListStudentIds(arrOfObj) {
  if (!Array.isArray(arrOfObj)) {
    return [];
  }
  const mapArr = arrOfObj.map((element) => element.id);
  return mapArr;
}
