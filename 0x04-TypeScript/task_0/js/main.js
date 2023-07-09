var student1 = {
    firstName: "Isioma",
    lastName: "Chinwe",
    age: 28,
    location: "Lagos",
};
var student2 = {
    firstName: "Chude",
    lastName: "Nedu",
    age: 25,
    location: "Enugu",
};
var studentList = [student1, student2];
var body = document.querySelector("body");
var table = document.createElement("table");
var rowh = document.createElement("tr");
rowh.innerHTML = "<th>Firstname</th><th>Location</th>";
table.appendChild(rowh);
studentList.forEach(function (student) {
    var row1 = document.createElement("tr");
    row1.innerHTML = "<td>".concat(student.firstName, "</td><td>").concat(student.location, "</td>");
    table.appendChild(row1);
});
body.appendChild(table);
