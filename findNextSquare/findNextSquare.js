// Codewars 7 kyu
// Task: Find the next perfect square.
// Description: If square will be perfect integral return next square, else return -1.

// My solution //

function findNextSquare(square) {
    let root = Math.sqrt(square);
    if(!Number.isInteger(root)) return -1;

    return (root + 1) * (root + 1);
}


/*
Challenge & Learning Note:
I almost solved this problem, but my code didn’t work correctly at first.
I stopped and asked myself why, then reviewed my logic step by step.

Eventually, I realized my mistake: I wasn’t checking whether the square root
was an integer. While researching, I learned about `Number.isInteger()`.

I learned this method from w3schools, and it helped me fully understand
how to correctly find a perfect square.
*/