const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents('database.csv')
      .then((data) => {
        res.end(data);
      })
      .catch((error) => {
        res.end('Cannot load the database');
      });
  } else {
    res.end('Invalid endpoint');
  }
});

app.listen(1245);

module.exports = app;
