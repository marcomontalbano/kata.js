Hello world
===========

A "Hello world" program is a computer program that outputs "Hello world" on a display device.

Because it is typically one of the simplest programs possible in most programming languages, it is by tradition often used to illustrate to beginners the most basic syntax of a programming language.

It is also used to verify that a language or system is operating correctly.

> [wikipedia](http://en.wikipedia.org/wiki/Hello_world)


Test Driven Development - step by step
--------------------------------------

First of all we should create a new file `HelloWorldSpec.js` inside the folder `spec` of our project and add the `<script>` tag to the `SpecRunner.html`.

```
#!html

<script type="text/javascript" src="spec/HelloWorldSpec.js"></script>
```

Now we can start writing our first test.

```
#!javascript

describe('HelloWorld', function()
{
  it('should exist.', function()
  {
    // given
    var helloWorld = new HelloWorld();
  });
});
```

**RED** - Try running *test* and it will fail.

- - - - - - - - - - - - -

Create a new file `HelloWorld.js` inside the folder `src` of our project and add the `<script>` tag to the `SpecRunner.html`.

```
#!html

<script type="text/javascript" src="spec/HelloWorld.js"></script>
```

The next step is writing some code that would cause the test to pass.

```
#!javascript

function HelloWorld() {
}
```

**GREEN** - Try running *test* and it will pass.

- - - - - - - - - - - - -

**Need for refactoring?**

- - - - - - - - - - - - -

We have a green bar! Now we can write a new test.

```
#!javascript

...

  it('should greet() correcly.', function()
  {
    // given
    var helloWorld = new HelloWorld();

    // then
    expect(helloWorld.greet()).toEqual('Hello world');
  });

...
```

**RED** - Try running *test* and it will fail.

- - - - - - - - - - - - -

Now we can write some code that would cause the test to pass.

```
#!javascript

...

HelloWorld.prototype.greet = function() {
  return 'Hello world';
};
```

**GREEN** - Try running *test* and it will pass.

- - - - - - - - - - - - -

**Need for refactoring?**

- - - - - - - - - - - - -

**Done**

Sources available on this repository.
