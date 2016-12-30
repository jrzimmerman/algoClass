/*
BINARY SEARCH ARRAY

*** Description

Given a sorted array and a value, determine if the value is in the array using the binary search (divide and conquer) method.

*** Exercises

Write a function that takes a sorted array and a value and returns the index of the value in the array. Return null if the value is not found in the array. What is the time complexity?

Extra credit: Implement the function both iteratively and recursively.

*/

const binarySearchArray = (arr, target) => {
  const length = arr.length;
  if (length < 2) {
    return arr;
  }
  const mid = Math.floor(length / 2);
  if (arr[mid] === target) {
    return mid;
  }
  if(arr[mid] < target) {
    return binarySearchArray(arr.slice(0, mid), target);
  } else {
    return binarySearchArray(arr.slice(mid,length), target);
  }
}
