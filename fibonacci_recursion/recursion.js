/*Here i have done fibonacci using recursive function*/
let fibonacci = function (term) {
    if (term === 0) {
        return 0;
    }
    if (term === 1) {
        return 1;
    }
    return fibonacci(term - 1) + fibonacci(term - 2);
};
console.log(fibonacci(8)); //here 8 will give you the 8th term of the fibonacci series.
