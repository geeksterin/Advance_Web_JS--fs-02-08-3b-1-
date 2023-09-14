var users = [
  { user: "barney", age: 36, active: true },
  { user: "barney", age: 36, active: true },
  { user: "barney", age: 36, active: true },
  { user: "barney", age: 36, active: false },
  { user: "barney", age: 78, active: false },
  { user: "barney", age: 36, active: true },
  { user: "barney", age: 36, active: true },
  { user: "barney", age: 36, active: false },
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
];

map = _.map(users, function (ele)  {return _.pick(ele, ["user"])})
console.log(map);

// const filteredArrau = _.filter(users, function (ele) {
//   return ele.age > 36;
// });

var objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];

const sumby = _.sumBy(users, function (o) {
  return o.age;
});
const sum = _.sum([1, 2, 3, 4, 6, 5]);
console.log(sum, sumby);

function square(n) {
  return n * n;
}

map = _.map([4, 8, 67, 8], square);
console.log(map);

var object = { a: 1, b: "2", c: 3 };

pickq = _.pick(object, ["a", "c"]);
console.log(pickq);
// => { 'a': 1, 'c': 3 }
