/* exported getStudentNames */
function getStudentNames(students) {
  var studentNames = [];
  for (const names in students) {
    studentNames.push(students[names].name);
  }
  return studentNames;
}
