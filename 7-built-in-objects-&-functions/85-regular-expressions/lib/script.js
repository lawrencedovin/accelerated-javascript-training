var string = 'abc';
var pattern = /ab/;

console.log(pattern.exec(string)); //["ab"]
console.log(pattern.test(string)); //true
console.log(string.match(pattern)); //["ab"]