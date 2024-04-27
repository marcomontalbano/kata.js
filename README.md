[![Build Status](https://github.com/marcomontalbano/kata.js/workflows/Node%20CI/badge.svg)](https://github.com/marcomontalbano/kata.js)
[![Coverage Status](https://coveralls.io/repos/github/marcomontalbano/kata.js/badge.svg?branch=main)](https://coveralls.io/github/marcomontalbano/kata.js?branch=main)


# Test-Driven Development with Vitest: How to

A [code kata](https://en.wikipedia.org/wiki/Kata_(programming)) is an exercise in programming which helps a programmer hone their skills through practice and repetition.

The term was probably first coined by [Dave Thomas](https://en.wikipedia.org/wiki/Dave_Thomas_(programmer)), co-author of the book [The Pragmatic Programmer](https://en.wikipedia.org/wiki/The_Pragmatic_Programmer), in a bow to the Japanese concept of kata in the martial arts.


## Katas

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


## Continuous Integration with Github Actions workflows

A [GitHub Actions](https://github.com/features/actions) [workflow](https://docs.github.com/en/actions/using-workflows/about-workflows) is essentially a customizable automated process that can perform various tasks. You set it up using a YAML file in your repository, and it kicks in based on events in your repository, manual triggers, or on a schedule you define.

These workflows live in the `.github/workflows` directory of your repository, and you can have multiple workflows, each handling different tasks.

This is just an example:

```yaml
name: Node CI

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node: [18.x, 20.x, 22.x]

    steps:
    - uses: actions/checkout@v4

    - uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node }}

    - name: Project setup `npm ci`
      run: npm ci

    - name: Run `test`
      run: npm test
```

## Test-driven development

Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle:

* first the developer writes an (initially failing) automated test case that defines a desired improvement or new function.
* then produces the minimum amount of code to pass that test.
* finally refactors the new code to acceptable standards.

### Toolkit

[Vitest](https://vitest.dev/) is a next-generation unit testing framework built on Vite, offering lightning-fast test execution, seamless migration from Jest due to its compatible features, intelligent watch mode for efficient development, and out-of-the-box support for modern JavaScript like ES modules, TypeScript, and JSX.

[Istanbul](https://istanbul.js.org/) is a JavaScript code coverage tool that helps you understand how well your tests exercise your codebase. It works by instrumenting your code to track which parts are executed during testing, providing insights into areas that might need more attention.

[Stryker](https://stryker-mutator.io/) is a tool for mutation testing, specifically designed for JavaScript and similar languages.  It injects tiny faults (mutations) into your code, then re-runs your tests. If a mutation breaks a test, it indicates your tests are effective at catching errors. This helps improve the quality and reliability of your codebase.

### Example

Following an example of Test-Driven Development using Vitest for the most famous application: **`Hello World`**!

Setup is easy, just run an `npm` command and change few lines into your `package.json`.

```sh
npm install -D vitest
```

```json
"scripts": {
  "test": "vitest"
},
```

Now you are able to run unit tests with `npm test`.

First of all we should create a new file `HelloWorld.spec.js`.

Now we can start writing our first test.

```js
//- HelloWorldSpec.js

import { describe, it, expect } from 'vitest';
import HelloWorld from from './HelloWorld';

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

export default HelloWorld;
```

:green_heart: **GREEN** - Try running test and it will pass.

---

:grey_question: **Need for refactoring?**

---

We have a green bar! Now we can write a new test.

```js
//- HelloWorld.spec.js

...

  it('should greet() correctly.', () => {
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

**SPEC** - `HelloWorld.spec.js`

```js
//- HelloWorld.spec.js

import { describe, it, expect } from 'vitest';
import HelloWorld from from './HelloWorld';

describe('HelloWorld', () => {

  it('should exist.', () => {
    // given
    new HelloWorld();
  });

  it('should greet() correctly.', () => {
    // given
    const helloWorld = new HelloWorld();

    // then
    expect(helloWorld.greet()).to.equal('Hello world');
  });

});
```

**SRC** - `HelloWorld.js`

```js
//- HelloWorld.js

function HelloWorld() {
}

HelloWorld.prototype.greet = function () {
  return 'Hello world';
};

export default HelloWorld;
```

---

Now if we decide to refactor the application moving from `prototype` to `class`, we can do it without fear.

So, let's do this :sunglasses:

```js
//- HelloWorld.js

export default class {
  greet() {
    return 'Hello world'
  }
}
```

:green_heart: **GREEN** - Try running test and it will pass.


## Further readings

* [Test Driven Development: By Example](https://www.amazon.it/gp/product/0321146530/ref=as_li_tl?ie=UTF8&tag=marcomontalba-21&camp=3414&creative=21718&linkCode=as2&creativeASIN=0321146530&linkId=1ca1dd6ac49f36bde8d8873e0c219592) (Kent Beck) - Addison-Wesley
* [JavaScript Testing with Jasmine](https://www.amazon.it/gp/product/B00C10Y9BS/ref=as_li_tl?ie=UTF8&tag=marcomontalba-21&camp=3414&creative=21718&linkCode=as2&creativeASIN=B00C10Y9BS&linkId=09b0ff07e7fdfff34479e6b75c6c0de6) (Evan Hahn) - O'Reilly Media
