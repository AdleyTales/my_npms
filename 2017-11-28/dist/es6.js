'use strict';

var PI = 3.1415926;

var a = 'nihao2323';

var fn = function fn() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;

  return a + b;
};

var _loop = function _loop(i) {
  setTimeout(function () {
    console.log(i);
  }, 3000);
};

for (var i = 0; i < 10; i++) {
  _loop(i);
}

var str = a + ' is running ...';

var z = 100,
    x = 'aaa',
    c = true,
    v = 500;

console.log(z);

var _d$f$g = { d: 'hfdsk', f: 2390, g: 'jjjjjj' },
    d = _d$f$g.d,
    f = _d$f$g.f,
    g = _d$f$g.g;


var obj = {
  a: 1000,
  fn: function fn() {
    console.log(3);
  }
};

var arr = [1, 2, 3, 4, 5, 6];

console.log(arr);
// 
// function *fn(){
//   console.log(1);
//   console.log(1);
//   console.log(1);
// }

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var n = _step.value;

    console.log(n);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}