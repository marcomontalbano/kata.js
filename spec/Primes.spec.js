;;
describe('Primes', function()
{
    "use strict";

    var primes;

    beforeEach(function() {
        primes = new Primes();
    });

    it('knows that 0 is not a prime number.', function() {
        expect( primes.getLessThan( 0 ) ).toEqual([]);
    });

    it('knows that 1 is not a prime number.', function() {
        expect( primes.getLessThan( 1 ) ).toEqual([]);
    });

    it('can get primes less than 2.', function() {
        expect( primes.getLessThan( 2 ) ).toEqual([]);
    });

    it('can get primes less than 3.', function() {
        expect( primes.getLessThan( 3 ) ).toEqual([2]);
    });

    it('can get primes less than 10.', function() {
        expect( primes.getLessThan( 10 ) ).toEqual([2,3,5,7]);
    });

    it('can get primes less than 100.', function() {
        expect( primes.getLessThan( 100 ) ).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]);
    });

     // https://en.wikipedia.org/wiki/Prime_number#Definition_and_examples
    it('can get primes less than 1000.', function() {
        expect( primes.getLessThan( 1000 ).length ).toEqual(168);
    });

     // http://www.mathematical.com/primes0to1000k.html
    it('can get primes less than 1000000.', function() {
        expect( primes.getLessThan( 1000000 ).length ).toEqual(78498);
    });

});
