// Codewars - 7kyu
// Task: Highest and Lowest
/*
Description:
In this little assignment you are given a string of space separated numbers,
and have to return the highest and lowest number.
*/

// My solution//

function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number);   // change string to num array
    let maxNum = Math.max(...numbers);   // find max number
    let minNum = Math.min(...numbers);   // find min number
    return `${maxNum} ${minNum}`         // return max and min
}


/*
Challenge & Learning note:
I spent 2 days solving this problem. It helped me better understand
string manipulation, array conversion, and using Math methods in JavaScript.
I also practiced breaking a problem into smaller logical steps.
*/