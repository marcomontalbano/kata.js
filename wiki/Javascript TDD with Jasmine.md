Javascript TDD with Jasmine
===========================

Jasmine is a behavior-driven development framework for testing JavaScript code.

It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.

> [Jasmine 2.0][Jasmine 2.0]



jasmine-jquery
--------------

jasmine-jquery provides two extensions for Jasmine JavaScript Testing Framework:

* a set of custom matchers for jQuery framework
* an API for handling HTML, CSS, and JSON fixtures in your specs

There are problems with the Cross domain policy under Chrome (and other browsers), to solve it you can run the script using a web server.

My solution is to use a small web server for node.js. Install node.js and then execute:
```sh

node webserver.js
```

Now you can run your tests connecting to [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

> [jasmine-jquery][jasmine-jquery]




[Jasmine 2.0]: http://jasmine.github.io/2.0/introduction.html

[jasmine-jquery]: https://github.com/velesin/jasmine-jquery
