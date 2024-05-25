const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents('database.csv')
      .then((data) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(data);
      })
      .catch((error) => {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Cannot load the database');
      });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
