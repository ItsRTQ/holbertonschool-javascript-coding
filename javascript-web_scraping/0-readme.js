#!/usr/bin/node
const fs = require('fs').promises;
const path = require('path');
const readFile = async (filePath) => {
  try {
    const resolvedPath = path.resolve(filePath);
    const data = await fs.readFile(resolvedPath, 'utf8');
    console.log(data);
  } catch (err) {
    console.error(`{ Error : ${err.message} at ${err.stack}}`);
  }
};

readFile(process.argv[2]);
