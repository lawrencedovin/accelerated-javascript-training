var array = [1,2,3,4];

console.log(array.filter(function(value) {
    return value > 2;
}));

console.log(array.map(function(value) {
    return value * 2;
}));

console.log(array);
console.log(array.reverse());
console.log(array);