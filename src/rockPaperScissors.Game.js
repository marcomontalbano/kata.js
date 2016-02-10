;;

var rockPaperScissors = rockPaperScissors || {};

rockPaperScissors.Game = function( _player_a, _player_b ) {

    "use strict";

    var _rounds  = [];

    var _elements = {
        'rock'     : 1,
        'paper'    : 3,
        'scissors' : 5,
    };

    var Round = function( player )
    {
        this.player     = player;
        this.played     = player.play();
        this.is_valid   = _elements.hasOwnProperty( this.played );
    };

    var _checkRound = function( round )
    {
        // check players
        if ( ! round.player_a.is_valid ) return false;
        if ( ! round.player_b.is_valid ) return false;

        // check for "draw"
        if ( round.player_a.played === round.player_b.played ) return 'drawn';

        // check for "win"
        if  (
                ( round.player_a.played === 'rock'     && round.player_b.played === 'scissors' )  ||
                ( round.player_a.played === 'scissors' && round.player_b.played === 'paper'    )  ||
                ( round.player_a.played === 'paper'    && round.player_b.played === 'rock'     )
            )
        {
            return round.player_a.player;
        }

        return round.player_b.player;
    };

    this.play = function()
    {
        // create new round
        _rounds.push({
            player_a : new Round( _player_a ),
            player_b : new Round( _player_b ),
        });

        // check last round.
        return _checkRound( _rounds.slice(-1)[0] );
    };

};
