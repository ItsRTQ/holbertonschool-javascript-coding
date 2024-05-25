const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const countByField = {};

    lines.forEach(line => {
      const fields = line.split(',');
      if (fields.length !== 2) return;

      const [field, firstName] = fields;

      if (!countByField[field]) {
        countByField[field] = {
          count: 1,
          students: [firstName.trim()]
        };
      } else {
        countByField[field].count++;
        countByField[field].students.push(firstName.trim());
      }
    });

    for (const field in countByField) {
      console.log(`Number of students in ${field}: ${countByField[field].count}. List: ${countByField[field].students.join(', ')}`);
    }
    const totalStudents = Object.values(countByField).reduce((total, field) => total + field.count, 0);
    console.log(`Number of students: ${totalStudents}`);
  } catch (error) {
    console.error('Cannot load the database');
  }
}
const databasePath = 'database.csv';
countStudents(databasePath);
module.exports = countStudents;
