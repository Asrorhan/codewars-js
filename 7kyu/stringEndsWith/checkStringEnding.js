// Codewars 7 kyu
// Task: Check string ending.
/* Description: 
Return true if the first argument (string) ends with the second argument (string).
Otherwise, return false.
*/

// My solution //

function solution(str,ends) {
    if(ends.length > str.length) return false;

    let startIndex = str.length - ends.length;
    for(let i = 0; i < ends.length; i++) {
        if(str[startIndex + i] !== ends[i]) return false;
    }
    return true;
}
 

/*
Challenge & Learning Note:
This task helped me improve my logical thinking about string comparison.
First, I solved the problem by comparing characters one by one.

After finishing, I reviewed other developers' solutions and discovered
a built-in method that makes the solution shorter and cleaner:

  return str.endsWith(ends);

Through this task, I learned both the logic behind the problem
and the practical JavaScript method used in real projects.
*/
