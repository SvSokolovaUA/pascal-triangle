function buildPascalTriangle(rows) {
  // // TODO: write some code here
   let triangle = [];
    for (let i = 1; i <= rows; i += 1){
    triangle.push(createRow(i));
    }
    return triangle;
}

function createRow(n) {
  let row = [1];
  for (let i = 1; i < n - 1; i += 1){
    row[i] = createRow(n - 1)[i - 1] + createRow(n - 1)[i];
  }
  row[n - 1] = 1;
  return row;
}
console.log(createRow(1));
console.log(createRow(5));
console.log(buildPascalTriangle(2));