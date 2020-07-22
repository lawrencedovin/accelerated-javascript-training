function Person() {
    this.name = 'Max';
    this.greet = function() {
        console.log('Hello, ' + this.name);
    }
}

Person.prototype.greet = function() {
    console.log('Hello');
};

var person = new Person();
person.name = 'Anna'; // doesn't override the name of the blueprint object
                      // just the instance

var anotherPerson = new Person();

person.greet();
anotherPerson.greet();

// Constructor function
function Cat(name, age) {
    this.name = name;
    this.age = age;
}

var cat = new Cat('Max', 27);
console.log(cat);