export default function getSttudentIdsSum(arrOfObj) {
  const arrId = arrOfObj.map((element) => element.id);
  return arrId.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}
