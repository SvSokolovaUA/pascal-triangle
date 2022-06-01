function buildPascalTriangle(rows) {
  // TODO: write some code here
   let triangle = [];
    for (let i = 1; i <= rows; i += 1){
    triangle.push(createRow(i));
    }
    return triangle;
}

function createRow(n) {
  let row = [1];
  let prevRow;
  if (n > 1) {
    prevRow = createRow(n - 1);
  }
  for (let i = 1; i < n - 1; i += 1){
    row[i] = prevRow[i - 1] + prevRow[i];
  }
  row[n - 1] = 1;
  return row;
}

// function createRow(n) {
//   let row = [1];
//   for (let i = 1; i < n - 1; i += 1){
//     row[i] = createRow(n - 1)[i - 1] + createRow(n - 1)[i];
//   }
//   row[n - 1] = 1;
//   return row;
// }

console.log(createRow(1));
console.log(createRow(5));
console.log(buildPascalTriangle(3));