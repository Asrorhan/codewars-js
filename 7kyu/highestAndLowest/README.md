# JavaScript Practice — Highest and Lowest (Codewars 7kyu)

## Task Description

You are given a **string of space-separated numbers**.  
Your task is to return the **highest** and **lowest** number.

## Example

highAndLow("1 2 3 4 5") ➜ "5 1"  
highAndLow("1 2 -3 4 5") ➜ "5 -3"

## My Approach

To solve this problem, I followed these logical steps:

1. Convert the string into an array using **split()**
2. Convert string values to numbers using **map(Number)**
3. Use **Math.max()** to find the largest number
4. Use **Math.min()** to find the smallest number
5. Return both values in a formatted string
