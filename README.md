[![Build Status](https://travis-ci.org/marcomontalbano/kata.js.svg?branch=master)](https://travis-ci.org/marcomontalbano/kata.js)
[![Coverage Status](https://coveralls.io/repos/github/marcomontalbano/kata.js/badge.svg?branch=master)](https://coveralls.io/github/marcomontalbano/kata.js?branch=master)


Test-Driven Development with Jasmine: How to
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

There are two ways to execute tests.

### Output on HTML

Install [Node.js](http://nodejs.org) and then execute:

```sh
npm install -g grunt-cli
npm install
npm start
```

Alternatively you can use [Yarn](https://yarnpkg.com/lang/en/).

```sh
yarn global add grunt-cli
yarn
yarn start
```

Open you favorite browser and link to [http://127.0.0.1:8000/](http://127.0.0.1:8080/).

### Output on Console

Grunt and Grunt plugins are installed and managed via npm, the [Node.js](http://nodejs.org) package manager.

In order to get started, you'll want to install Grunt's command line interface (CLI) globally.

You may need to use sudo (for OSX, \*nix, BSD etc) or run your command shell as Administrator (for Windows) to do this.

```sh
npm install -g grunt-cli
npm install
npm test
```

Alternatively you can use [Yarn](https://yarnpkg.com/lang/en/).

```sh
yarn global add grunt-cli
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
  "test": "grunt test"
},
```

* Add a `.travis.yml` file to your repository to tell Travis CI what to build:

```yaml
language: node_js
node_js:
  - "6"
before_script:
  - npm install -g grunt-cli

```

* *note*: `npm install` and `npm test` are automatically executed by Travis CI.
* Commit and push your changes.

That's it!


## Test-driven development

Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle:

* first the developer writes an (initially failing) automated test case that defines a desired improvement or new function.
* then produces the minimum amount of code to pass that test.
* finally refactors the new code to acceptable standards.

### Jasmine

[Jasmine](http://jasmine.github.io/2.0/introduction.html) is a behavior-driven development framework for testing JavaScript code.
It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.

[jasmine-jquery](https://github.com/velesin/jasmine-jquery) provides two extensions for Jasmine JavaScript Testing Framework:

- a set of custom matchers for jQuery framework
- an API for handling HTML, CSS, and JSON fixtures in your specs

### Example

The [standalone distribution](https://github.com/jasmine/jasmine#installation) contains everything you need to start running Jasmine.

After downloading a particular version and unzipping, opening `SpecRunner.html` will run the included specs. You’ll note that both the source files and their respective specs are linked in the `head` tag of the `SpecRunner.html`. To start using Jasmine, replace the source/spec files with your own.

Following an example of Test-Driven Development using Jasmine for the most famous application: **Hello World**!

First of all we should create a new file `HelloWorldSpec.js` inside the folder `spec` of our project and add the `script` tag to the `SpecRunner.html`.

```html
<script type="text/javascript" src="spec/HelloWorldSpec.js"></script>
```

Now we can start writing our first test.

```js
//- spec/HelloWorldSpec.js

describe('HelloWorld', function() {
  it('should exist.', function() {
    // given
    var helloWorld = new HelloWorld();
  });
});
```
:exclamation: **RED** - Try running test and it will fail.

---

Create a new file `HelloWorld.js` inside the folder `src` of our project and add the `script` tag to the `SpecRunner.html`.

```html
<script type="text/javascript" src="src/HelloWorld.js"></script>
```

The next step is writing some code that would cause the test to pass.

```js
//- src/HelloWorld.js

function HelloWorld() {
}
```

:green_heart: **GREEN** - Try running test and it will pass.

---

:grey_question: **Need for refactoring?**

---

We have a green bar! Now we can write a new test.

```js
//- spec/HelloWorldSpec.js

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

:exclamation: **RED** - Try running test and it will fail.

---

Now we can write some code that would cause the test to pass.

```js
//- src/HelloWorld.js

...

HelloWorld.prototype.greet = function() {
  return 'Hello world';
};
```

:green_heart: **GREEN** - Try running test and it will pass.

---

:grey_question: **Need for refactoring?**

---

:tada: **Done**

---

**SPEC** - HelloWorldSpec.js

```js
describe('HelloWorld', function()
{
  it('should exist.', function()
  {
    // given
    var helloWorld = new HelloWorld();
  });

  it('should greet() correcly.', function()
  {
    // given
    var helloWorld = new HelloWorld();

    // then
    expect(helloWorld.greet()).toEqual('Hello world');
  });
});
```

**SRC** - HelloWorld.js

```js
function HelloWorld() {
}
HelloWorld.prototype.greet = function() {
  return 'Hello world';
};
```


## Further readings

* [Test Driven Development: By Example](https://www.amazon.it/gp/product/0321146530/ref=as_li_tl?ie=UTF8&tag=marcomontalba-21&camp=3414&creative=21718&linkCode=as2&creativeASIN=0321146530&linkId=1ca1dd6ac49f36bde8d8873e0c219592) (Kent Beck) - Addison-Wesley
* [JavaScript Testing with Jasmine](https://www.amazon.it/gp/product/B00C10Y9BS/ref=as_li_tl?ie=UTF8&tag=marcomontalba-21&camp=3414&creative=21718&linkCode=as2&creativeASIN=B00C10Y9BS&linkId=09b0ff07e7fdfff34479e6b75c6c0de6) (Evan Hahn) - O'Reilly Media
* [Jasmine JavaScript Testing](https://www.amazon.it/gp/product/B00ESX15MW/ref=as_li_tl?ie=UTF8&tag=marcomontalba-21&camp=3414&creative=21718&linkCode=as2&creativeASIN=B00ESX15MW&linkId=56d03cf6deae504b4eef80075e3be7fb) (Paulo Ragonha) - Packt Publishing
* [JavaScript Unit Testing](https://www.amazon.it/gp/product/1782160620/ref=as_li_tl?ie=UTF8&tag=marcomontalba-21&camp=3414&creative=21718&linkCode=as2&creativeASIN=1782160620&linkId=9389d2655483038a950339ca11a7035c) (Hazem Saleh) - Packt Publishing
