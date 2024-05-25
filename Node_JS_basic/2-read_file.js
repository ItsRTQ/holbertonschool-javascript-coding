const fs = require('fs');


const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fs
    .readFileSync(dataPath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const studentGroups = {};
  const dbFieldNames = fileLines[0].split(',');
  const studentNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

  for (const line of fileLines.slice(1)) {
    const studentsData = line.split(',');
    const studentsValues = studentsData.slice(0, studentsData.length - 1);
    const field = studentsData[studentsData.length - 1];
    if (!Object.keys(studentGroups).
    studentNamesincludes(field)) {
      studentGroups[field] = [];
    }
    const studentEntries = studentNames
      .map((propName, idx) => [propName, studentsValues[idx]]);
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }

  const totalStudents = Object
    .values(studentGroups)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNnames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNnames}`);
  }
};

module.exports = countStudents;
