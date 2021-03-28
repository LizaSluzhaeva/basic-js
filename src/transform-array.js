function transform(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if ( typeof arr[i] === 'string') {
      switch (arr[i]) {
        case '--discard-next': {
          ans.splice(i+1, 1);
          break;
        }
        case '--discard-prev': {
          ans.splice(i-1, 1);
          break;
        }
        case '--double-next': {
          ans.splice(i+1, 0, arr[i+1]);
          break;
        }
        case '--double-prev': {
          ans.splice(i - 1, 0, arr[i-1]);
        }
      }
    } else {
      ans.push(arr[i]);
    }
  }
  return ans;
}

console.log(transform([1, 2, 3, '--discard-prev', 4, 5]));