import fs from 'fs';

const stream = fs.createReadStream('./db/db.json', {highWaterMark: 150 * 1024,  encoding: 'utf8' });

stream.on('data', (chunk) => {
  console.log(chunk);
  console.log("***************************");
  
});