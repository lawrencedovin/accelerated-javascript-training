window.onload = function() {
    console.log('Window Loaded!');
};
// Always Executed whenever the window loads.

var btn = document.querySelector('button');
btn.onclick = function() {
    console.log('Clicked!');
};

// only allows one event to be listened at a time but if you want to have
// multiple functions to call you have to do another approach