;;

describe('rockPaperScissors.Game', function()
{
    "use strict";

    var
          rockPlayer
        , paperPlayer
        , scissorsPlayer
        , craftyPlayer

        , rock_vs_rock
        , paper_vs_paper
        , scissors_vs_scissors

        , rock_vs_scissors
        , rock_vs_paper

        , paper_vs_rock
        , paper_vs_scissors

        , scissors_vs_rock
        , scissors_vs_paper
    ;

    beforeEach(function()
    {
        // players
        rockPlayer     = new rockPaperScissors.Player();
        paperPlayer    = new rockPaperScissors.Player();
        scissorsPlayer = new rockPaperScissors.Player();
        craftyPlayer   = new rockPaperScissors.Player();

        spyOn(rockPlayer     , 'play').and.returnValue('rock');
        spyOn(paperPlayer    , 'play').and.returnValue('paper');
        spyOn(scissorsPlayer , 'play').and.returnValue('scissors');
        spyOn(craftyPlayer   , 'play').and.returnValue('crafty');

        // games
        rock_vs_rock         = new rockPaperScissors.Game(rockPlayer, rockPlayer);
        paper_vs_paper       = new rockPaperScissors.Game(paperPlayer, paperPlayer);
        scissors_vs_scissors = new rockPaperScissors.Game(scissorsPlayer, scissorsPlayer);

        rock_vs_scissors = new rockPaperScissors.Game(rockPlayer, scissorsPlayer);
        rock_vs_paper    = new rockPaperScissors.Game(rockPlayer, paperPlayer);

        paper_vs_rock     = new rockPaperScissors.Game(paperPlayer, rockPlayer);
        paper_vs_scissors = new rockPaperScissors.Game(paperPlayer, scissorsPlayer);

        scissors_vs_rock  = new rockPaperScissors.Game(scissorsPlayer, rockPlayer);
        scissors_vs_paper = new rockPaperScissors.Game(scissorsPlayer, paperPlayer);
    });

    it('should exist.', function()
    {
        // given
        expect(function() {
            new rockPaperScissors.Game();
        }).not.toThrow();
    });

    it('is drawn when equal elements are selected.', function()
    {
        // then
        expect( rock_vs_rock.play() ).toEqual('drawn');
        expect( paper_vs_paper.play() ).toEqual('drawn');
        expect( scissors_vs_scissors.play() ).toEqual('drawn');
    });

    it('"crafty players" will lose.', function()
    {
        // given
        var   crafty_vs_rock     = new rockPaperScissors.Game(craftyPlayer, rockPlayer)
            , crafty_vs_paper    = new rockPaperScissors.Game(craftyPlayer, paperPlayer)
            , crafty_vs_scissors = new rockPaperScissors.Game(craftyPlayer, scissorsPlayer)
        ;

        // then
        expect( crafty_vs_rock.play() ).toBe( false );
        expect( crafty_vs_paper.play() ).toBe( false );
        expect( crafty_vs_scissors.play() ).toBe( false );
    });

    it('"rock" beats "scissors".', function()
    {
        expect( rock_vs_scissors.play() ).toEqual( rockPlayer );
        expect( scissors_vs_rock.play() ).toEqual( rockPlayer );
    });

    it('"scissors" beats "paper".', function()
    {
        expect( scissors_vs_paper.play() ).toEqual( scissorsPlayer );
        expect( paper_vs_scissors.play() ).toEqual( scissorsPlayer );
    });

    it('"paper" beats "rock".', function()
    {
        expect( paper_vs_rock.play() ).toEqual( paperPlayer );
        expect( rock_vs_paper.play() ).toEqual( paperPlayer );
    });

});
