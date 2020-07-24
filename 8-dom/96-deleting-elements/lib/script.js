var p = document.createElement('P');
p.textContent = 'A new paragraph';
p.style.fontSize = '17px';

var a = document.querySelector('a');

a.appendChild(p);

var a = li.firstElementChild;
var li = document.querySelector('li');
li.insertBefore(p, a);
// specifies paragraph before anchor