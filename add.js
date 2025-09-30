function add(a, b) {
  return (sum = a + b);
}

add();

function isEven(num) {
  return num % 2 === 0;
}

// 3. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 4. Find maximum in an array
function findMax(arr) {
  return Math.max(...arr);
}

// 5. Generate random number between min and max
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 6. Capitalize first letter
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// 7. Count vowels in string
function countVowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}

// 8. Factorial using recursion
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// 9. Check if string is palindrome
function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === clean.split("").reverse().join("");
}

// 10. Sum of array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Example usage
console.log(add(5, 3)); // 8
console.log(isEven(4)); // true
console.log(reverseString("hello")); // "olleh"
console.log(findMax([2, 5, 9, 1])); // 9
console.log(getRandom(1, 100)); // random number
console.log(capitalize("rocky")); // "Rocky"
console.log(countVowels("javascript")); // 3
console.log(factorial(5)); // 120
console.log(isPalindrome("Racecar")); // true
console.log(sumArray([1, 2, 3, 4])); // 10
