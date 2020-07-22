var person = {
    name: 'Max',
    age: 27,
    details: {
        hobbies: ['Sports', 'Cooking'],
        location: 'Germany'
    },
    greet: function() {
        console.log('Hello');
    }
};


var age = 'age';
console.log(person[age]);

console.log(person);
console.log(person.name);
console.log(person.details.hobbies);
person.greet();