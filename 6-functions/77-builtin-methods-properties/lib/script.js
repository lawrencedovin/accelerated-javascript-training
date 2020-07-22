function message(message) {
    console.log(message);
    console.log(arguments.length);
}

message('Hi!', 10);

var msg = message;
console.log(msg.name); //access
console.log(msg.length); //number of arguments the function expects
