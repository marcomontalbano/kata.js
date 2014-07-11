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

My solution is to use a small web server for Node.js. Install [Node.js][Node.js] and then execute:

```sh
node webserver.js
```

Now you can run your tests connecting to [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

> [jasmine-jquery][jasmine-jquery]



output: Console vs HTML
-----------------------

By default Jasmine prints the output on a browser using the `SpecRunner.html`.

If you want to use the console you can install a [Grunt][Grunt] plugin called "[grunt-contrib-jasmine][grunt-contrib-jasmine]".

Basically you need to install [Node.js][Node.js] and then create a new file `package.json` like this:

```json
{
  "name" : "project-name",
  "version" : "1.0.0",
  "devDependencies" : {
    "grunt-contrib-jasmine": "*"
  }
}
```

and a file `Gruntfile.js` like this:

```js
module.exports = function(grunt)
{ 
  grunt.initConfig(
  {
    jasmine : {
      src : [
        'src/*.js'
      ],
      options : {
        helpers : [
          'spec/*Helper.js'
        ],
        specs : [
          'spec/*Spec.js'
        ]
      }
    }  
  });
  
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('test', [ 'jasmine' ]);
};
```

install the plugin and all dependencies:

```sh
npm install -g grunt-cli
npm install
```

execute tests via console:

```sh
grunt test
```



Continuous Integration with drone.io
------------------------------------

[drone.io][drone.io] is a continuous integration for GitHub and Bitbucket that monitors your code for bugs.

In order to use drone.io with your Javascript projects you need to have an output on console instead of the html.

1. create a `New Project`.
1. select a Repository.
1. select `Node.js` as language.
1. copy&paste the `Build Script`:

```sh
npm install -g grunt-cli
npm install
grunt test
```

That's it!

Click on `Build Now` button and ... ... [![Build Status](https://drone.io/bitbucket.org/mmontalbano/kata-jasmine/status.png)](https://drone.io/bitbucket.org/mmontalbano/kata-jasmine/latest)




[Jasmine 2.0]: http://jasmine.github.io/2.0/introduction.html

[jasmine-jquery]: https://github.com/velesin/jasmine-jquery

[grunt-contrib-jasmine]: https://www.npmjs.org/package/grunt-contrib-jasmine
[Grunt]: http://gruntjs.com
[Node.js]: http://nodejs.org

[drone.io]: https://drone.io