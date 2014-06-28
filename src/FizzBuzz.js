function FizzBuzz()
{
  var canISayFizz = function( number ) {
    return number % 3 == 0;
  }

  var canISayBuzz = function( number ) {
    return number % 5 == 0;
  }

  this.say = function( number )
  {
    number = parseInt(number);

    if ( number == 0 )   throw new Error('cannot say zero');
    if ( number <  0 )   throw new Error('cannot say negative numbers');
    if ( isNaN(number) ) throw new Error('can say only numbers');

    var iSay = [];
    if ( canISayFizz(number) ) iSay.push('Fizz');
    if ( canISayBuzz(number) ) iSay.push('Buzz');

    if ( iSay.length === 0 ) return number;
    
    return iSay.join(' ');
  };
}