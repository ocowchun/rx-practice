var Rx = require('rx');
var soruce = Rx.Observable.of(1, 2, 3, 4, 5);

var double = function(num) {
  return num * 2;
};

var isEven = function(num) {
  return num % 2 === 0;
};

soruce.filter(isEven).map(double).subscribe(function(num) {
  console.log(num);
});
