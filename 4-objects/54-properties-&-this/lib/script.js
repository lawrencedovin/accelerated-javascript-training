var person = {
    name: 'Max',
    age: 27,
    details: {
        hobbies: ['Sports', 'Cooking'],
        location: 'Germany'
    },
    greet: function() {
        console.log('Hello, I am: ' + person.name);
    }
};

person.name = 'Anna';
person.greet();