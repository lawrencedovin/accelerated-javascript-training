try {
    test();
} catch(error) {
    console.log(error);
} finally {
    //Execute always
    console.log('Finally');
}