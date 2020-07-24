console.log(innerWidth);
console.log(outerWidth);
console.log(innerHeight);
console.log(outerHeight);
console.log(localStorage); 

localStorage.setItem('key1', 1000);
console.log(localStorage.getItem('key1'));
// saves certain values in your browser as long 
// as the application is running here.
// store some data to keep it in our running application
// use it from different points in our application
// because in whichever script file we call local storage
// we only have one local storage and this is why this is a great way
// to store value you want to use throughout our application at different
// points of time.

sessionStorage.setItem('key1', 1000);
console.log(sessionStorage.getItem('key1'));

// Works in the same way and the difference is that localStorage
// should persist where as sessionStorage will be deleted or 
// emptied when the user closes a tab or the browser.

console.log(window.location);
console.log(window.document);
window.open('http://google.com');