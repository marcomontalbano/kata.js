import { expect } from 'chai';

import FizzBuzz from './FizzBuzz';

describe('FizzBuzz', () => {

    let fizzBuzz;

    beforeEach(() => {
        fizzBuzz = new FizzBuzz();
    });

    it('can say "Fizz" when number is divisible by three', () => {
        // given
        const array = [3, 6, 9, 12, 18, 21, 24, 27, 33, 36, 39, 42, 48, 51, 54, 57];

        // then
        array.forEach(number => {
            expect(fizzBuzz.say(number)).to.eql('Fizz');
        });
    });

    it('can say "Buzz" when number is divisible by five', () => {
        // given
        const array = [5, 10, 20, 25, 35, 40, 50, 55, 65, 70, 80, 85, 95, 100];

        // then
        array.forEach(number => {
            expect(fizzBuzz.say(number)).to.eql('Buzz');
        });
    });

    it('can say "Fizz Buzz"', () => {
        // given
        const array = [15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255];

        // then
        array.forEach(number => {
            expect(fizzBuzz.say(number)).to.eql('Fizz Buzz');
        });
    });

    it('can say the number', () => {
        // given
        const array = [1, 2, 4, 7, 8, 11, 13, 14, 16, 17, 19, 22, 23, 26, 28, 29, 31, 32];

        // then
        array.forEach(number => {
            expect(fizzBuzz.say(number)).to.eql(number);
        });
    });

    it('cannot say zero', () => {
        // then
        expect(() => {
            fizzBuzz.say(0);
        }).to.throw('cannot say zero');
    });

    it('cannot say negative numbers', () => {
        // given
        const array = [-1, -2, -43, -432];

        // then
        array.forEach(number => {
            expect(() => {
                fizzBuzz.say(number);
            }).to.throw('cannot say negative numbers');
        });
    });

    it('can say only numbers', () => {
        // then
        expect(() => {
            fizzBuzz.say('hi!');
        }).to.throw('can say only numbers');
    });

});
