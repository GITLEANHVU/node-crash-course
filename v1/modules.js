// cách này hơi dài 
const xyz = require('./people')
// console.log(xyz.people, xyz.ages)

// nên dùng cách này nếu exports nhiều objects
const { people, ages } = require('./people')
console.log(people, ages)

// =============
const os = require('os')
console.log(os)