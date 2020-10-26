function Primes()
{
    "use strict";

    this.getLessThan = function( n )
    {
        var primeNumbers = [2];
        var isPrime;

        if ( n <= 2 ) {
            return [];
        }

        // check only odd numbers
        for ( var i = 3; i < n; i += 2 ) {

            isPrime = true;

            //for ( var j in primeNumbers ) { // slower
            for ( var j = 0; j < primeNumbers.length; j++ ) {

                if ( i % primeNumbers[j] === 0 ) {
                    isPrime = false;
                    break;
                }

                // https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
                if ( Math.sqrt(i) < primeNumbers[j] ) {
                    break;
                }
            }

            if ( isPrime ) {
                primeNumbers.push( i );
            }

        }

        return primeNumbers;
    };
}

export default Primes;
