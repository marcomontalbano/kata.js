;;

var rockPaperScissors = rockPaperScissors || {};

rockPaperScissors.Player = function() {

    "use strict";

    this.elements = [
        'rock',
        'paper',
        'scissors',
    ];

    this.play = function() {
        var rnd = Math.floor(Math.random() * ((this.elements.length - 1) + 1));
        return this.elements[ rnd ];
    };

};
