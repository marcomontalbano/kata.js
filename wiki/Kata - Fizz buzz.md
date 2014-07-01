Fizz buzz
=========

Fizz buzz (also known as bizz buzz, or simply buzz) is a group word game for children to teach them about division.

Players take turns to count incrementally, replacing any number divisible by three with the word "fizz", and any number divisible by five with the word "buzz".

> [wikipedia](http://en.wikipedia.org/wiki/Fizz_buzz)


Test Driven Development - step by step
--------------------------------------

First of all we should create a new file `FizzBuzzSpec.js` inside the folder `spec` of our project and add the `<script>` tag to the `SpecRunner.html`.

```
#!html

<script type="text/javascript" src="spec/FizzBuzzSpec.js"></script>
```

Now we can start writing our first test.

```
#!javascript

describe('FizzBuzz', function()
{
  it('should exist.', function()
  {
    // given
    var fizzBuzz = new FizzBuzz();
  });
});
```

**RED** - Try running *test* and it will fail.

- - - - - - - - - - - - -

Create a new file `FizzBuzz.js` inside the folder `src` of our project and add the `<script>` tag to the `SpecRunner.html`.

```
#!html

<script type="text/javascript" src="spec/FizzBuzz.js"></script>
```

The next step is writing some code that would cause the test to pass.

```
#!javascript

function FizzBuzz()
{
  
}
```

**GREEN** - Try running *test* and it will pass.

- - - - - - - - - - - - -

**Need for refactoring?**

- - - - - - - - - - - - -

We have a green bar! We can write a new test.

```
#!javascript

...

  it('can say "Fizz" when number is divisible by three', function()
  {
    // given
    var fizzBuzz = new FizzBuzz();

    // then
    expect(fizzBuzz.say(3)).toEqual('Fizz');
  });

...
```

**RED** - Try running *test* and it will fail.

- - - - - - - - - - - - -

Now we can write some code that would cause the test to pass.

```
#!javascript

function FizzBuzz()
{
  this.say = function( number )
  {
    return 'Fizz';
  };
}
```

**GREEN** - Try running *test* and it will pass.

- - - - - - - - - - - - -

**Need for refactoring?**

If we look at the spec code, we notice that we have a code duplication for `var fizzBuzz = new FizzBuzz();`. We must refactor it.

> **Refactor code** - Remove any duplication you can find.

The new spec code is:

```
#!javascript

describe('FizzBuzz', function()
{
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it('can say "Fizz" when number is divisible by three', function()
  {
    // then
    expect(fizzBuzz.say(3)).toEqual('Fizz');
  });
});
```

**GREEN** - Try running *tests* and they will pass again.

- - - - - - - - - - - - -

We have a green bar and the code doesn't need a refactor! We can write a new test.

```
#!javascript

...

  it('can say "Buzz" when number is divisible by five', function()
  {
    // then
    expect(fizzBuzz.say(5)).toEqual('Buzz');
  });

...
```

**RED** - Try running *test* and it will fail.

- - - - - - - - - - - - -

Now we can write some code that would cause the test to pass.

```
#!javascript

function FizzBuzz()
{
  this.say = function( number )
  {
    if (number % 3 == 0) {
      return 'Fizz';
    }
    
    return 'Buzz';
  };
}
```

**GREEN** - Try running *test* and it will pass.

- - - - - - - - - - - - -

**Need for refactoring?**

- - - - - - - - - - - - -

We have a green bar! We can write a new test.

```
#!javascript

...

  it('can say "Fizz Buzz"', function()
  {
    // then
    expect(fizzBuzz.say(15)).toEqual('Fizz Buzz');
  });

...
```

**RED** - Try running *test* and it will fail because 15 is also divisible by three.

- - - - - - - - - - - - -

Now we can write some code that would cause the test to pass.

```
#!javascript

function FizzBuzz()
{
  this.say = function( number )
  {
    if (number % 3 == 0 && number % 5 == 0) {
      return 'Fizz Buzz';
    }
    
    if (number % 3 == 0) {
      return 'Fizz';
    }
    
    return 'Buzz';
  };
}
```

**GREEN** - Try running *test* and it will pass.

- - - - - - - - - - - - -

**Need for refactoring?**

Sure, we could write the `src` code even better, and we should!

We have a green bar, therefore we can safely refactor our code.

```
#!javascript

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
    if (canISayFizz(number) && canISayBuzz(number)) {
      return 'Fizz Buzz';
    }
    
    if (canISayFizz(number)) {
      return 'Fizz';
    }
    
    return 'Buzz';
  };
}
```

**GREEN** - Try running *tests* and they will pass again.

Is it enough? We can do it even better!

```
#!javascript

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
    var iSay = [];
    if ( canISayFizz(number) ) iSay.push('Fizz');
    if ( canISayBuzz(number) ) iSay.push('Buzz');
    
    return iSay.join(' ');
  };
}
```

**GREEN** - Try running *tests* and they will pass again. Cool!

- - - - - - - - - - - - -

We have a green bar! We can write a new test.

```
#!javascript

...

  it('can say the number', function()
  {
    // then
    expect(fizzBuzz.say(1)).toEqual(1);
  });

...
```

**RED** - Try running *test* and it will fail.

- - - - - - - - - - - - -

Now we can write some code that would cause the test to pass.

```
#!javascript

...

if ( iSay.length === 0 ) return number;

...
```

**GREEN** - Try running *test* and it will pass.

- - - - - - - - - - - - -

**Need for refactoring?**

- - - - - - - - - - - - -

We have a green bar! We can write a new test.

```
#!javascript

...

  it('cannot say zero', function()
  {
    // then
    expect(function() {
      fizzBuzz.say(0);
    }).toThrowError('cannot say zero');
  });

...
```

**RED** - Try running *test* and it will fail because 0 is divisible by any number except 0.

- - - - - - - - - - - - -

Now we can write some code that would cause the test to pass.

```
#!javascript

...

if ( number == 0 ) throw new Error('cannot say zero');

...
```

**GREEN** - Try running *test* and it will pass.

- - - - - - - - - - - - -

**Need for refactoring?**

- - - - - - - - - - - - -

We have a green bar! We can write a new test.

```
#!javascript

...

  it('cannot say negative numbers', function()
  {
    // then
    expect(function() {
      fizzBuzz.say(-1);
    }).toThrowError('cannot say negative numbers');
  });

...
```

**RED** - Try running *test* and it will fail, because we cannot say negative numbers.

- - - - - - - - - - - - -

Now we can write some code that would cause the test to pass.

```
#!javascript

...

if ( number < 0 ) throw new Error('cannot say negative numbers');

...
```

**GREEN** - Try running *test* and it will pass.

- - - - - - - - - - - - -

**Need for refactoring?**

- - - - - - - - - - - - -

We have a green bar! We can write a new test.

```
#!javascript

...

  it('can say only numbers', function()
  {
    // then
    expect(function() {
      fizzBuzz.say('hi!');
    }).toThrowError('can say only numbers');
  });

...
```

**RED** - Try running *test* and it will fail because we cannot say negative numbers.

- - - - - - - - - - - - -

Now we can write some code that would cause the test to pass.

```
#!javascript

...

number = parseInt(number);
if ( isNaN(number) ) throw new Error('can say only numbers');

...
```

**GREEN** - Try running *test* and it will pass.

- - - - - - - - - - - - -

**Need for refactoring?**

- - - - - - - - - - - - -

We have almost finished ..

While we are adding tests or now (as in this case), we should enhance old tests adding more coverage.

```
#!javascript

...
// given
var array = [3,6,9,12,18,21,24,27,33,36,39,42,48,51,54,57];

// then
for (var i in array) {
  expect(fizzBuzz.say( array[i] )).toEqual('Fizz');
}
...
// given
var array = [5,10,20,25,35,40,50,55,65,70,80,85,95,100];

// then
for (var i in array) {
  expect(fizzBuzz.say( array[i] )).toEqual('Buzz');
}
...
// given
var array = [15,30,45,60,75,90,105,120,135,150,165,180,195,210,225,240,255];

// then
for (var i in array) {
  expect(fizzBuzz.say( array[i] )).toEqual('Fizz Buzz');
}
...

...
```

- - - - - - - - - - - - -

**Done**

Now we have a `FizzBuzz` object that plays better than you do :)


```
#!javascript

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
```

- - - - - - - - - - - - -

Sources available on this repository.
