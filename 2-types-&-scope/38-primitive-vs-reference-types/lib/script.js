// Primitive Types
var aNumber = 5;
console.log(aNumber);
var anotherNumber = aNumber;
console.log(anotherNumber);
aNumber = 12;
console.log(aNumber);
console.log(anotherNumber);

// Reference Types
var array = [1,2,3];
var anotherArray = array;
console.log(array);
console.log(anotherArray);

array.push(4);
console.log(array);
console.log(anotherArray);

// var a = {a:5};
// var b = a;
// console.log(a);
// console.log(b);

// var a = {a:10};
// console.log(a);
// console.log(b);