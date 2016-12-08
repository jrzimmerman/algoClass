//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
const whileLoop = (n) => {
  while(n >= 0) {
    console.log(n);
    n--;
  }
};
whileLoop(5);

//2. Next, try looping just like above except using recursion
const recurseLoop = (n) => {
  if (n < 0) {
    return;
  }
  console.log(n);
  recurseLoop(n-1);
};

recurseLoop(5);

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
const exponent = (base, expo) => {
  let total = 1;
  while (expo) {
    total *= base;
    expo--;
  }
  return total;
}

exponent(2,4);

//4. Write a function 'recursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
const recursiveExponent = (base, expo, total) => {
  if(expo < 1) {
    return total;
  }
  return recursiveExponent(base, expo - 1, base * total);
}

recursiveExponent(2, 4, 1);

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
const recursiveMultiplier = (arr, num) => {
  let counter = arr.length - 1;
  const recurse = (counter) => {
    if(counter < 0) {
      return;
    }
    arr[counter] *= num;
    return recurse(counter-1);
  }
  recurse(counter);
  return arr;
};

recursiveMultiplier([1, 2, 3, 4], 2);

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
const recursiveReverse = (arr) => {
  let len = Math.floor((arr.length-1)/2);
  
  const swap = () => {
    if ( len < 0) {
      return;
    }
    let temp = arr[len];
    arr[len] = arr[arr.length-len-1];
    arr[arr.length-len-1] = temp;
    len--;
    return swap();
  } 
  swap(arr);
  return arr;
}

recursiveReverse([1,2,3,4,5]);
