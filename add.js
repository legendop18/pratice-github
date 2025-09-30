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
