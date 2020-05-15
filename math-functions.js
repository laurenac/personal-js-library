// square a number
function squared(num) {
    return num * num;
}

// cube a number
function cubed(num) {
    return num * num * num;
}

/* factorial = the product of all numbers less than a given number
and the given number e.g. the factorial of 4 is 24 we get there by 
multiplying 1 * 2 * 3 * 4    */ 
function factorial(num) {
    // set our number to a var that we can iterate with
    let x = num;
    // get all numbers that are less than our given num and multiply
    // while our iterator is greater that 1
    while (x > 1){
        // multiply our number by the current iteration 
        num *= x - 1;
        x --;
    }
}