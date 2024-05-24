console.log("Hello");

//Fibonacci sequence using interation
function fibs(num) {
    if (num === 0) {
        return [0];
    } else if (num === 1) {
        return [0, 1];
    } else {
        let myArray = [0, 1];

        for (let i = 2; i < num; i++) {
            myArray.push(myArray.at(-2) + myArray.at(-1));
        };
        return myArray;
    }
}

console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(8));

//Fibonacci sqeuence using recursion
function fibsRec(num) {
    if (num === 0) {
        return [0];
    } else if (num === 1) {
        return [0, 1];
    } else {
        const myArray = fibsRec(num - 1);

        if (myArray.length < num) {
            myArray.push(myArray[myArray.length - 1] + myArray[myArray.length - 2]);
        };

        return myArray;
    };
};

console.log(fibsRec(8));