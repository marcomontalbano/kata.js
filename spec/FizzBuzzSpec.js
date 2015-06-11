;;
describe('FizzBuzz', function()
{
    "use strict";

    var fizzBuzz;

    beforeEach(function() {
        fizzBuzz = new FizzBuzz();
    });

    it('can say "Fizz" when number is divisible by three', function()
    {
        // given
        var array = [3,6,9,12,18,21,24,27,33,36,39,42,48,51,54,57];

        // then
        for (var i in array) {
            expect(fizzBuzz.say( array[i] )).toEqual('Fizz');
        }
    });

    it('can say "Buzz" when number is divisible by five', function()
    {
        // given
        var array = [5,10,20,25,35,40,50,55,65,70,80,85,95,100];
    
        // then
        for (var i in array) {
            expect(fizzBuzz.say( array[i] )).toEqual('Buzz');
        }
    });

    it('can say "Fizz Buzz"', function()
    {
        // given
        var array = [15,30,45,60,75,90,105,120,135,150,165,180,195,210,225,240,255];

        // then
        for (var i in array) {
            expect(fizzBuzz.say( array[i] )).toEqual('Fizz Buzz');
        }
    });

    it('can say the number', function()
    {
        // given
        var array = [1,2,4,7,8,11,13,14,16,17,19,22,23,26,28,29,31,32];

        // then
        for (var i in array) {
            expect(fizzBuzz.say( array[i] )).toEqual( array[i] );
        }
    });

    it('cannot say zero', function()
    {
        // then
        expect(function() {
            fizzBuzz.say(0);
        }).toThrowError('cannot say zero');
    });

    it('cannot say negative numbers', function()
    {
        // given
        var array = [-1, -2, -43, -432];

        // then
        for (var i in array) {
            expect(function() {
                fizzBuzz.say( array[i] );
            }).toThrowError('cannot say negative numbers');
        }
    });

    it('can say only numbers', function()
    {
        // then
        expect(function() {
            fizzBuzz.say('hi!');
        }).toThrowError('can say only numbers');
    });

});
