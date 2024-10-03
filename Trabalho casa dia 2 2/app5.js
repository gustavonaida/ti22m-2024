function firstNPrimes(n) {
    let primes = [];
    let num = 2;
    while (primes.length < n) {
    if (isPrime(num)) {
    primes.push(num);
    }
    num++;
    }
    console.log(primes);
   }