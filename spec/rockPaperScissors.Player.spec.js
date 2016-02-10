;;

describe('rockPaperScissors.Player', function()
{
    "use strict";

    var   player
        , elements
        ;

    beforeEach(function()
    {
        player = new rockPaperScissors.Player();

        elements = [
            "rock",
            "paper",
            "scissors"
        ];
    });

    it('should exist.', function()
    {
        // given
        expect(function() {
            player = new rockPaperScissors.Player();
        }).not.toThrow();
    });

    it('should know that elements are "rock", "paper" and "scissors".', function()
    {
        expect( player.elements ).toEqual( elements );
    });

    describe('the method "play".', function()
    {
        it('should exist.', function()
        {
            expect( player.play ).toEqual( jasmine.any(Function) );
        });

        it('should always says "rock" or "paper" or "scissors".', function()
        {
            // given
            for (var i = 0; i < 1000; i++) {
                expect(elements).toEqual( jasmine.arrayContaining( [player.play()] ) );
            }
        });
    });

    

});
