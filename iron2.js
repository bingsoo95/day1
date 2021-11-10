const width = 600
const length = 600
const feet = 30.48
const iron = 3.5

console.log(parseInt(width % feet + length % feet) * iron)