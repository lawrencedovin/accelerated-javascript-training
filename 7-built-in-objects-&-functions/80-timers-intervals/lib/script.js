setTimeout(function() {
    console.log('Finished');
}, 2000); //after 2 seconds outputs console.log

setInterval(function() {
    console.log('Ping!');
}, 500); //repeats every 0.5 seconds

var interval = setInterval(function() {
    console.log('Ping!');
}, 500);

setTimeout(function() {
    clearInterval(interval);
}, 2500); //repeats every 0.5 seconds until 2.5 seconds