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
            .toString()
        }
    })
  }
})