export default function getStudentsByLocation(arrOfObj, city) {
  return arrOfObj.filter((element) => element.location === city);
}
