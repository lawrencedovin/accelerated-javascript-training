var a = document.querySelectorAll('a')[1];
a.parentElement.removeChild(a);
// Old Browser
a.remove();
// New Browser