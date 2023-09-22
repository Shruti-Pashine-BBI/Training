/*Write a JavaScript function called arrayManipulation that takes an array of numbers as input and performs the following operations:

Find and return the sum of all the numbers in the array.
Find and return the average (mean) of the numbers in the array, rounded to two decimal places.
Find and return the largest number in the array.
Find and return the smallest number in the array.
Create a new array that contains only the unique numbers from the input array (remove duplicates).
Sort the original array in ascending order.

Your function should return an object with the following properties:

sum: The sum of all the numbers in the array.
average: The average of the numbers in the array.
largest: The largest number in the array.
smallest: The smallest number in the array.
uniqueNumbers: An array containing unique numbers from the input array.
sortedArray: The original array sorted in ascending order.

For example, if the input array is [4, 2, 7, 4, 1, 9, 7], the function should return:

{
  sum: 34,
  average: 4.86,
  largest: 9,
  smallest: 1,
  uniqueNumbers: [4, 2, 7, 1, 9],
  sortedArray: [1, 2, 4, 4, 7, 7, 9]
}*/

class stringman {
  getdata() {
    let arr = [4, 2, 7, 4, 1, 9, 7];
    console.log(arr);
    let sum = 0;
    let avg;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    console.log(sum);
    console.log(sum / arr.length);
    console.log(Math.max(...arr));
    console.log(Math.min(...arr));
    let set = new Set(arr);
    console.log(...set);
    const sorted = arr.sort();
    console.log(...sorted);
  }
}
const obj = new stringman();
obj.getdata();
