[![Build Status](https://travis-ci.org/marcomontalbano/kata-jasmine.svg?branch=master)](https://travis-ci.org/marcomontalbano/kata-jasmine)
[![Build Status](https://drone.io/github.com/marcomontalbano/kata-jasmine/status.png)](https://drone.io/github.com/marcomontalbano/kata-jasmine/latest)


TOC
===

* Sound Player
* Hello World
* FizzBuzz
* Rock Paper Scissors


Test driven development
=======================

Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle:

* first the developer writes an (initially failing) automated test case that defines a desired improvement or new function.
* then produces the minimum amount of code to pass that test.
* finally refactors the new code to acceptable standards.

> [wikipedia][Test driven_development]


JavaScript TDD with Jasmine
===========================

Jasmine is a behavior-driven development framework for testing JavaScript code.

It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.

> [Jasmine 2.0][Jasmine 2.0]


Katas
=====

A code kata is an exercise in programming which helps a programmer hone their skills through practice and repetition.

The term was probably first coined by [Dave Thomas][], co-author of the book [The Pragmatic Programmer][], in a bow to the Japanese concept of kata in the martial arts.

As of October 2011, Dave Thomas has published [21 different katas][].

> [wikipedia][Kata_(programming)]


Setup
=====

There are two ways to execute tests.

Output on HTML
--------------

Install [Node.js][Node.js] and then execute:

```sh
node webserver.js
```

Open you favorite browser and link to [http://127.0.0.1:8000/](http://127.0.0.1:8000/).

Output on Console
-----------------

Grunt and Grunt plugins are installed and managed via npm, the [Node.js][Node.js] package manager.

In order to get started, you'll want to install Grunt's command line interface (CLI) globally.

You may need to use sudo (for OSX, \*nix, BSD etc) or run your command shell as Administrator (for Windows) to do this.

```sh
npm install -g grunt-cli
npm install
grunt test
```


Continuous Integration with travis-ci.org
-----------------------------------------

[Travis CI][Travis CI] is a hosted, distributed continuous integration service used to build and test software projects hosted at GitHub.

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
  - "0.10"
before_script:
  - npm install -g grunt-cli

```

* *note*: `npm install` and `npm test` are automatically executed by Travis CI.
* Commit and push your changes.

That's it!


Continuous Integration with drone.io
------------------------------------

[drone.io][drone.io] is a continuous integration for GitHub and Bitbucket that monitors your code for bugs.

In order to use drone.io with your JavaScript projects you must use output on console instead of the html.

* Create a `New Project`.
* Select the repository.
* Select `Node.js` as language.
* Select `Node 0.10` as version.
* Fill the `Build Script` field with the following script:

```sh
npm install -g grunt-cli
npm install
npm test
```

That's it!

Click on `Build Now` and ... ... [![Build Status](https://drone.io/github.com/marcomontalbano/kata-jasmine/status.png)](https://drone.io/github.com/marcomontalbano/kata-jasmine/latest)


Wiki
====

[Check out the wiki] for more information about the TDD with Jasmine.



[Test driven_development]: http://en.wikipedia.org/wiki/Test-driven_development

[Jasmine 2.0]: http://jasmine.github.io/2.0/introduction.html

[Dave Thomas]: http://en.wikipedia.org/wiki/Dave_Thomas_(programmer)
[The Pragmatic Programmer]: http://en.wikipedia.org/wiki/The_Pragmatic_Programmer
[21 different katas]: http://codekata.com/
[Kata_(programming)]: http://en.wikipedia.org/wiki/Kata_(programming)

[Node.js]: http://nodejs.org

[Travis CI]: https://travis-ci.org/
[drone.io]: https://drone.io

[Check out the wiki]: https://github.com/mmontalbano/kata-jasmine/wiki
