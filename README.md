[![Build Status](https://github.com/marcomontalbano/kata.js/workflows/Node%20CI/badge.svg)](https://github.com/marcomontalbano/kata.js)
[![Build Status](https://travis-ci.org/marcomontalbano/kata.js.svg?branch=master)](https://travis-ci.org/marcomontalbano/kata.js)
[![Coverage Status](https://coveralls.io/repos/github/marcomontalbano/kata.js/badge.svg?branch=master)](https://coveralls.io/github/marcomontalbano/kata.js?branch=master)


Test-Driven Development with Mocha: How to
============================================

A [code kata](https://en.wikipedia.org/wiki/Kata_(programming)) is an exercise in programming which helps a programmer hone their skills through practice and repetition.

The term was probably first coined by [Dave Thomas](https://en.wikipedia.org/wiki/Dave_Thomas_(programmer)), co-author of the book [The Pragmatic Programmer](https://en.wikipedia.org/wiki/The_Pragmatic_Programmer), in a bow to the Japanese concept of kata in the martial arts.


## Katas

* Sound Player
* Hello World
* FizzBuzz
* Rock Paper Scissors
* Primes


## Setup

All project dependencies are installed and managed via npm, the [Node.js](http://nodejs.org) package manager.

```sh
npm install
npm test
```

Alternatively you can use [Yarn](https://yarnpkg.com/lang/en/).

```sh
yarn
yarn test
```


## Continuous Integration with travis-ci.org

[Travis CI](https://travis-ci.org/) is a hosted, distributed continuous integration service used to build and test software projects hosted at GitHub.

In order to use Travis CI with your JavaScript projects you must use output on console instead of the html.

* Click on `+` sign to add new repository.
* Login with your Github credentials.
* Select the repository.
* Update your `package.json` adding:

```json
"scripts": {
  "test": "mocha ./**/*.spec.js"
},
```

* Add a `.travis.yml` file to your repository to tell Travis CI what to build:

```yaml
language: node_js
node_js:
  - "10"

```

* *note*: `npm install` and `npm test` are automatically executed by Travis CI.
* Commit and push your changes.

That's it!


## Test-driven development

Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle:

* first the developer writes an (initially failing) automated test case that defines a desired improvement or new function.
* then produces the minimum amount of code to pass that test.
* finally refactors the new code to acceptable standards.

### Toolkit

[Mocha](https://mochajs.org/) is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.

[Chai](https://www.chaijs.com/) is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

[Sinon](https://sinonjs.org/) is a standalone test spies, stubs and mocks for JavaScript. Works with any unit testing framework.

[Istanbul](https://istanbul.js.org/) instruments your ES5 and ES2015+ JavaScript code with line counters, so that you can track how well your unit-tests exercise your codebase.
The [nyc](https://github.com/istanbuljs/nyc) command-line-client for Istanbul works well with most JavaScript testing frameworks: tap, mocha, AVA, etc.

[Stryker](https://stryker-mutator.io/) uses one design mentality to implement mutation testing. It's easy to use and fast to run. Stryker will only mutate your source code, making sure there are no false positives.

### Example

Following an example of Test-Driven Development using Mocha and Chai for the most famous application: **`Hello World`**!

Setup is easy, just run an `npm` command and change few lines into your `package.json`.

```sh
npm install -D mocha chai
```

```json
"scripts": {
  "test": "mocha ./**/*.spec.js"
},
```

Now you are able to run unit tests with `npm test`.

> If you want to use ES6 syntax with import/export you will need `babel` also. To understand more about it, you can checkout this project, I'm using it :smile:

First of all we should create a new file `HelloWorld.spec.js`.

Now we can start writing our first test.

```js
//- HelloWorldSpec.js

const expect = require('chai').expect;
const HelloWorld = require('./HelloWorld');

describe('HelloWorld', () => {
  it('should exist.', () => {
    // given
    new HelloWorld();
  });
});

```
:exclamation: **RED** - Try running test and it will fail.

---

Create a new file `HelloWorld.js`.

The next step is writing some code that would cause the test to pass.

```js
//- HelloWorld.js

function HelloWorld() {
}

module.exports = HelloWorld;
```

:green_heart: **GREEN** - Try running test and it will pass.

---

:grey_question: **Need for refactoring?**

---

We have a green bar! Now we can write a new test.

```js
//- HelloWorld.spec.js

...

  it('should greet() correcly.', () => {
    // given
    const helloWorld = new HelloWorld();

    // then
    expect(helloWorld.greet()).to.equal('Hello world');
  });

...
```

:exclamation: **RED** - Try running test and it will fail.

---

Now we can write some code that would cause the test to pass.

```js
//- HelloWorld.js

...

HelloWorld.prototype.greet = function () {
  return 'Hello world';
};
```

:green_heart: **GREEN** - Try running test and it will pass.

---

:grey_question: **Need for refactoring?**

---

:tada: **Done**

---

**SPEC** - HelloWorld.spec.js

```js
//- HelloWorld.spec.js

const expect = require('chai').expect;
const HelloWorld = require('./HelloWorld');

describe('HelloWorld', () => {

  it('should exist.', () => {
    // given
    new HelloWorld();
  });

  it('should greet() correcly.', () => {
    // given
    const helloWorld = new HelloWorld();

    // then
    expect(helloWorld.greet()).to.equal('Hello world');
  });

});
```

**SRC** - HelloWorld.js

```js
//- HelloWorld.js

function HelloWorld() {
}

HelloWorld.prototype.greet = function () {
  return 'Hello world';
};

module.exports = HelloWorld;
```

---

Now if we decide to refactor the application moving from `prototype` to `class`, we can do it without fear.

So, let's do this :sunglasses:

```js
//- HelloWorld.js

module.exports = class {
  greet() {
    return 'Hello world';
  }
}
```

:green_heart: **GREEN** - Try running test and it will pass.


## Further readings

* [Test Driven Development: By Example](https://www.amazon.it/gp/product/0321146530/ref=as_li_tl?ie=UTF8&tag=marcomontalba-21&camp=3414&creative=21718&linkCode=as2&creativeASIN=0321146530&linkId=1ca1dd6ac49f36bde8d8873e0c219592) (Kent Beck) - Addison-Wesley
* [JavaScript Testing with Jasmine](https://www.amazon.it/gp/product/B00C10Y9BS/ref=as_li_tl?ie=UTF8&tag=marcomontalba-21&camp=3414&creative=21718&linkCode=as2&creativeASIN=B00C10Y9BS&linkId=09b0ff07e7fdfff34479e6b75c6c0de6) (Evan Hahn) - O'Reilly Media
* [Jasmine JavaScript Testing](https://www.amazon.it/gp/product/B00ESX15MW/ref=as_li_tl?ie=UTF8&tag=marcomontalba-21&camp=3414&creative=21718&linkCode=as2&creativeASIN=B00ESX15MW&linkId=56d03cf6deae504b4eef80075e3be7fb) (Paulo Ragonha) - Packt Publishing
* [JavaScript Unit Testing](https://www.amazon.it/gp/product/1782160620/ref=as_li_tl?ie=UTF8&tag=marcomontalba-21&camp=3414&creative=21718&linkCode=as2&creativeASIN=1782160620&linkId=9389d2655483038a950339ca11a7035c) (Hazem Saleh) - Packt Publishing
