try {
    alert('start');
    lalala;
    alert('end');
} catch (err) { // variable representing an object of class 'Error', contains strings of the error
    // Can use 'err' variable
    alert(err.name);
    alert(err.message);
    alert(err.stack);

    // alert(err);
}