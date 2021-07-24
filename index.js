function sum(fromN, toN) {
  //If this condition meets true, return current Value
  if (fromN === toN) {
  	return fromN;
  }
  //If above statement does not meet true, add current value with invoking(looping) the function again with 1 highert number, untill current value becomes 'toN' variable
  return fromN + sum(++fromN, toN);
}

console.log(sum(1,4));

module.exports = sum;
