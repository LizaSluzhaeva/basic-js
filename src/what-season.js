const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let ans = '';
  let seasonsDate = [
    [new Date(1900, 6, 1), new Date(1900, 8, 31)],
    [new Date(1900, 9, 1), new Date(1900, 11, 30)],
    [new Date(1900, 12, 1), new Date(1900, 2, 29)],
    [new Date(1900, 3, 1), new Date(1900, 5, 31)],
  ];
  let seasons = ['summer', 'autumn', 'winter', 'spring'];
  let myDate = new Date(1900, date.getMonth(), date.getDay());
  for (let i = 0; i < seasonsDate.length; i++) {
    if (myDate >= seasonsDate[i][0] && myDate <= seasonsDate[i][1]) {
      ans = seasons[i];
    }
  }
  if (ans === '') {
    throw new Error('Not a date!');
  }
  return ans;
};
