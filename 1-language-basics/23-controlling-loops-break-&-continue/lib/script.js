for (var i = 0; i < 5; i++)
{
    for (var j = 0; j < 2; j++){
        if (i == 1) {
            continue;
        }
        console.log('inside inner loop, j = ' + j);
    }
    console.log(i);
}