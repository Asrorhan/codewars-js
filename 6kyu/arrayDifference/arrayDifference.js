// Codewars — 6 kyu
// Task: Array Difference
/*
Description:
Return a new array that contains elements from array 'a'
that are NOT present in array 'b'. All occurrences of values from 'b'
should be removed from 'a', while preserving the original order.
*/

function arrayDiff(a, b) {  
  let result = [];

  // Loop through each element in array 'a'
  for (let i = 0; i < a.length; i++) {
    // Check if current element from 'a' does NOT exist in 'b'
    if (!b.includes(a[i])) {
      result.push(a[i]);
    }
  }

  return result;
}

/*
Challenge & Learning Note:
At first, I misunderstood the problem and compared elements by index,
which was incorrect. The key idea is not position — it is whether
a value from array 'a' exists anywhere in array 'b'.

This task helped me understand:
- How to loop through arrays manually
- How to check for existence using `includes()`
- How filtering logic works step by step

Later, I also learned a shorter version using `filter()`:

  return a.filter(item => !b.includes(item));
*/
