window.onload=function() {
    var inner = document.querySelector('#inner');
    var outer = document.querySelector('#outer');

    inner.addEventListener('click', innerListener);
    outer.addEventListener('click', outerListener);
}

function innerListener(event) {
    console.log(event.clientX, event.clientY);
    event.target.style.backgroundColor = 'red';
    event.stopPropagation(); 
    // Stops outerListener from logging when clicking on inner 
    // since the outer holds the yellow container 
    console.log('Clicked inner!');
}

function outerListener(event) {
    console.log('Clicked outer!');
}
