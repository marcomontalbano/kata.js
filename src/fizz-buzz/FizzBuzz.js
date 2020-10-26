function FizzBuzz() {
    "use strict";

    const canISayFizz = number => {
        return number % 3 === 0;
    };

    const canISayBuzz = number => {
        return number % 5 === 0;
    };

    this.say = number => {
        number = parseInt(number);

        if (isNaN(number)) throw new Error('can say only numbers');
        if (number === 0) throw new Error('cannot say zero');
        if (number < 0) throw new Error('cannot say negative numbers');

        const iSay = [];
        if (canISayFizz(number)) iSay.push('Fizz');
        if (canISayBuzz(number)) iSay.push('Buzz');

        if (iSay.length === 0) return number;

        return iSay.join(' ');
    };
}

export default FizzBuzz;
