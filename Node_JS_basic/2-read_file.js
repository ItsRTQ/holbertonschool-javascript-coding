const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n').filter(line => line);
    const headers = lines[0].split(',');
    if (headers.length < 4 || headers[0] !== 'firstname' || headers[1] !== 'lastname' || headers[2] !== 'age' || headers[3] !== 'field') {
      throw new Error('Invalid CSV format');
    }
    const studentCounts = {};
    for (let i = 1; i < lines.length; i++) {
      const [firstname, lastname, age, field] = lines[i].split(',');
      if (firstname && lastname && age && field) {
        if (!studentCounts[field]) {
          studentCounts[field] = { count: 0, names: [] };
        }
        studentCounts[field].count += 1;
        studentCounts[field].names.push(firstname);
      }
    }
    const totalStudents = Object.values(studentCounts).reduce((acc, val) => acc + val.count, 0);
    console.log(`Number of students: ${totalStudents}`);
    for (const [field, info] of Object.entries(studentCounts)) {
      console.log(`Number of students in ${field}: ${info.count}. List: ${info.names.join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
    throw error;
  }
}

module.exports = countStudents;
