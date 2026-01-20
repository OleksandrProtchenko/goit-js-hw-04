function isEnoughCapacity(products, containerSize) {
  let total = 0;
  /* Варіант 1 */
  // for (const key in products) {
  //   total += products[key];
  // }
  // return total <= containerSize ? true : false;

  /* Варіант 2 */
  // for (const value of Object.values(products)) {
  //   total += value;
  // }
  // return total <= containerSize ? true : false;

  /* Варіант 3 */
  total = Object.values(products).reduce((acc, value) => acc + value, 0);
  // return total <= containerSize ? true : false;
  return total <= containerSize;
}

console.log("----- Task 1 -----");
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
