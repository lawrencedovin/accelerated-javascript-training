function fn(message) {
    console.log(message + this);
}

var obj = {
    obfn: fn
};

var person = {
    name: 'Max'
}

obj.obfn.call(person.name, 'Hello, ');

// variable in the object which holds the function fn,  
// obj.obfn accesses that function .call() 
// 1st parameter to pass this keyword into 
// 2nd parameter is the argument of the fn