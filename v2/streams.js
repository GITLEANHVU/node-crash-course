// Streams: start using data, before it has finished loading
const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog3.txt')
const writeStream = fs.createWriteStream('./docs/blog4.txt')


// readStream.on('data', (chunk) => {
//   // in giá trị ra screen
//   console.log('----- NEW CHUNK -----')
//   console.log(chunk.toString())
//   // ghi vào file blog4 giá trị của file blog 3
//   writeStream.write('\n============ New Chunk ============ \n');
//   writeStream.write(chunk);
// });

// pining (viết gọn của đoạn code bên trên :) )
readStream.pipe(writeStream);

