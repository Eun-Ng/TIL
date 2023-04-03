import fs from 'fs';
import http from 'http';
import path from 'node:path';

const server = http
  .createServer((req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      res.writeHead(200);
      res.end(data);
    });
  })
  .listen(8080, () => {
    console.log('서버 시작됨');
  });

exports = server;
module.exports = server;
