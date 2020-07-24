var http = new XMLHttpRequest();
var url = 'http://jsonplaceholder.typicode.com/posts';
var method = 'GET';

http.open(method, url);
// opens a connection
http.onreadystatechange = function() {
    if(http.readyState === XMLHttpRequest.DONE && http.status === 200) {
        // http.readyState checks if connection is done, operation complete
        // http.status === 200 means okay
        console.log(JSON.parse(http.responseText)[0].title);
        // print the data I got back, by accessing the data on the
        // HTTP object.
    } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
        console.log('Error!');
    }
};
http.send();
// sends the request