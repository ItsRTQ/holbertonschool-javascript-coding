import fs from 'fs';

const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  if (dataPath) {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const fileLines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const studentsWithinGroups = {};
        const dbFieldsByNames = fileLines[0].split(',');
        const studentsByNames = dbFieldsByNames
          .slice(0, dbFieldsByNames.length - 1);

        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentsValues = studentRecord
            .slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studentsWithinGroups).includes(field)) {
            studentsWithinGroups[field] = [];
          }
          const studentEntries = studentsByNames
            .map((propName, idx) => [propName, studentsValues[idx]]);
          studentsWithinGroups[field].push(Object.fromEntries(studentEntries));
        }
        resolve(studentsWithinGroups);
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabase;
