function sumPrimes(input) {
  let sum = 0;
  for (let i = 1; i <= input; i++) {
    if (isPrime(i)) {
      sum += i
    }
  }
  return sum
}

function isPrime(num) {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

export {
  sumPrimes,
};
