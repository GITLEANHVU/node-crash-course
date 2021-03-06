// I'm Lê Anh Vũ, i'm 19 years old.
// const { constants } = require('buffer')
const fs = require('fs')

// ======= reading files ========
// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data.toString())
//   }
// })
// console.log('the last line')

// ======== writing files ========
// fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
//   console.log('file was written')
// })
// tự tạo file mới và ghi dữ liệu vào
// fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
//   console.log('file was written')
// })

// ========= directories ==========
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) { console.log(err) }
    console.log('folder created')
  })
} else {
  fs.rmdir('./assets', (err) => {
    if (err) { console.log(err) }
    console.log('folder deleted')
  })
}
// ========= deleting files ========
if (fs.existsSync('./doc/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) { console.log(err); }
    console.log('file deleted');
  })
}
