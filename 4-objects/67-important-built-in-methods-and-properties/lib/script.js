var person = {
    name: 'Max',
    age: 27,
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
}

delete person.age;
console.log('name' in person);

for (var field in person) {
    console.log(person[field]);
}
