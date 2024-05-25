const http = require('http');
const fs = require('fs');

const PORT = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (dataPath) => {
  return new Promise((resolve, reject) => {
    if (!dataPath) {
      reject(new Error('Cannot load the database'));
    } else {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        } else {
          const lines = data.trim().split('\n');
          const studentGroups = {};

          lines.slice(1).forEach(line => {
            const [firstName, lastName, age, field] = line.split(',');
            if (!studentGroups[field]) {
              studentGroups[field] = [];
            }
            studentGroups[field].push(firstName);
          });

          let report = `Number of students: ${lines.length - 1}\n`;
          for (const field in studentGroups) {
            report += `Number of students in ${field}: ${studentGroups[field].length}. List: ${studentGroups[field].join(', ')}\n`;
          }

          resolve(report);
        }
      });
    }
  });
};

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(DB_FILE)
      .then(report => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`This is the list of our students\n\n${report}`);
      })
      .catch(error => {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Cannot load the database');
      });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = server;
