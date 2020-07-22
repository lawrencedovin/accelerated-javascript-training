var string = 'Any text';

console.log(string.length);
console.log(string[2]);
console.log(string.concat(' add a new string.'));
console.log(string.toUpperCase());
console.log(string.split(' ')); //['Any', 'text']

string = '          Any text     ';
console.log(string.trim()); //useful for handling user input