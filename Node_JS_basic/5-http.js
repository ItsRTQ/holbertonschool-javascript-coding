const http = require('http');
const { readFile } = require('fs').promises;

const app = http.createServer(async (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const data = await readFile('database.csv', 'utf8');
      res.end(`This is the list of our students\n\n${data}`);
    } catch (error) {
      res.end('Cannot load the database');
    }
  } else {
    res.end('Invalid endpoint');
  }
});

app.listen(1245);

module.exports = app;
