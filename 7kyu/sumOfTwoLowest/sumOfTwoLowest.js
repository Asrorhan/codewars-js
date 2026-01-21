//Codewars 7 kyu
// Task: Return sum of two lowest positive numbers.

// My solution//

function sumTwoSmallest(arr) {
    let sorted = arr.sort((a,b) => a - b);  // sort from small to big
    return sorted[0] + sorted[1];           // return sum of 2 smallest
}
sumTwoSmallest([12,45,1,7,3]) // output: 8


// Where did i have troble? i wrote this code but it returned wrong answer then i understand, my mistake. i wrote curly braces inside sort method but there wasn't return. So it returns undefined. then i realise my mistake. Our mistake make us grow.