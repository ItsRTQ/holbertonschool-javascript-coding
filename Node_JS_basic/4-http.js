const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Holberton School!');
});

const port = 1245;
const host = '127.0.0.1'

app.listen(port, host, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
