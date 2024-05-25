const fs = require('fs');

const countStudents = (dataPath) => {
  if (!fstat.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }
  if (!fstat.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fs
    .readFileSync(dataPath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const studentGroups = {};
  const dbFieldNames = fileLines[0].split(',');
  const studentPropName = dbFieldNames.slice(0, dbFieldNames.length - 1);
  for (const line of fileLines[0].split(',')) {
    const studentsData = line.split(',');
    const studentsDataValues = studentsData.slice(0, studentsData.length - 1);
    const field = studentsData[studentsData.length - 1];
    if (!Object.keys(studentGroups).includes(field)) {
      studentGroups[field] = [];
    }
    const studentEntries = studentPropName
      .map((propName, idx) => [propName, studentsDataValues[idx]]);
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }
  const totalStudents = Object
    .values(studentGroups)
    .reduce((pre, curr) => (pre || []).length + curr.length);
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, groups] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};
module.exports = countStudents;
