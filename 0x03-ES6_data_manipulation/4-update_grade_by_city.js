export default function updateStudentGradeByCity(arrOfObj, city, newGrade) {
  const filteredArr = arrOfObj.filter((element) => element.location === city);
  for (const element of filteredArr) {
    element.grade = 'N/A';
  }
  const newStdArr = filteredArr.map((element) => {
    const student = element;
    for (const grade of newGrade) {
      if (grade.studentId === student.id) {
        student.grade = grade.grade;
      }
    }
    return student;
  });
  return newStdArr;
}
