(function calc() {
    var number = 10;
    console.log(number);
})();

(function lognum(input) {
    var number = input;
    console.log(number);
})(10); //10

var obj = {};
(function logname(input) {
    obj.name = 'Max'
})(obj);

console.log(obj.name);