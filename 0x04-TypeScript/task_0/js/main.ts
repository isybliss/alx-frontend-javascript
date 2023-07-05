interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Isioma",
  lastName: "Chinwe",
  age: 28,
  location: "Lagos",
};

const student2: Student = {
  firstName: "Chude",
  lastName: "Nedu",
  age: 25,
  location: "Enugu",
}

const studentList: Student[] = [student1, student2];

const body = document.querySelector("body");
const table = document.createElement("table");
const rowh = document.createElement("tr");

rowh.innerHTML = `<th>Firstname</th><th>Location</th>`;
table.appendChild(rowh);

studentList.forEach((student) => {
  const row1 = document.createElement("tr");
  row1.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  table.appendChild(row1);
});

body.appendChild(table);
