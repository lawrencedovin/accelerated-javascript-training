var test = 'Global scope';

var localScope = function() {
    var test = 'Local scope';
    console.log(test);
}

localScope();
console.log(test);