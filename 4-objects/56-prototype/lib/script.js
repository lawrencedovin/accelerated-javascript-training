var person = {
    name: 'Max',
    age: 27
};

Object.prototype.greet = function() {
    console.log('hello there ' + this.name);
};

var julie = Object.create(person);
var lawrence = Object.create(person);

julie.greet();
lawrence.greet();