export default function updateStudentGradeByCity(arrOfObj, city, newGrade) {
  const filteredArr = arrOfObj.filter((element) => element.location === city);
  for (const student of filteredArr) {
    student.grade = 'N/A';
  }
  const newStdArr = filteredArr.map((student) => {
    for (const grade of newGrade) {
      if (grade.studentId === student.id) {
        student.grade = grade.grade;
      }
    }
    return student;
  });
  return newStdArr;
}
