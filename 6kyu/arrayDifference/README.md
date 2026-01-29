# JavaScript Practice — Array Difference (Codewars 6kyu)

## Task Description

Create a function that returns a new array containing elements from array **`a`** that are **NOT present** in array **`b`**.

All occurrences of values from `b` must be removed from `a`, while keeping the original order.

---

## Example

arrayDiff([1,2], [1]) ➜ [2]  
arrayDiff([1,2,2,2,3], [2]) ➜ [1,3]

---

## 💡 My Approach

To solve this problem, I followed these steps:

1. Create an empty result array
2. Loop through each element of array `a`
3. For every element, check if it **does NOT exist** in array `b`
4. If it doesn’t exist, add it to the result array
5. Return the result

This approach helped me understand how filtering works internally.
