 function countCats(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '^^') {
        count++;
      }
    }
  }
  return count;
}

console.log(countCats([[0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]));