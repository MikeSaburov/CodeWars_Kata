var countSheep = function (num) {
  //your code here
  let sheep = '';
  for (let i = 1; i <= num; i++) {
    sheep += i.toString() + ' sheep...';
  }
  return sheep;
};
