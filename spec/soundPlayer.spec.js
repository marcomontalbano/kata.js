import { expect, Assertion } from 'chai';
import { mock } from 'sinon';

import soundPlayer from '../src/soundPlayer';

Assertion.addMethod('toBePlaying', function (song) {
    const player = this._obj;

    // first, our instanceof check, shortcut
    new Assertion(player.currentlyPlayingSong).to.eql(song);

    // second, our type check
    this.assert(
        player.isPlaying
        , "expected #{this} to be of type #{exp} but got #{act}"
        , "expected #{this} to not be of type #{act}"
        , song                          // expected
        , player.currentlyPlayingSong   // actual
    );
});

describe('soundPlayer', () => {
    describe('Player', () => {

        let player, song;

        beforeEach(() => {
            player = new soundPlayer.Player();
            song = new soundPlayer.Song();
        });

        it('should be able to play a Song', () => {
            player.play(song);
            expect(player.currentlyPlayingSong).to.eql(song);

            // demonstrates use of custom matcher
            expect(player).toBePlaying(song);
        });

        describe('when song has been paused', () => {
            beforeEach(() => {
                player.play(song);
                player.pause();
            });

            it('should indicate that the song is currently paused', () => {
                expect(player.isPlaying).to.be.false;

                // demonstrates use of 'not' with a custom matcher
                expect(player).not.toBePlaying(song);
            });

            it('should be possible to resume', () => {
                player.resume();
                expect(player.isPlaying).to.be.true;
                expect(player.currentlyPlayingSong).to.eql(song);
            });
        });

        // demonstrates use of spies to intercept and test method calls
        it('tells the current song if the user has made it a favorite', () => {
            const mockPersistFavoriteStatus = mock(song).expects('persistFavoriteStatus');

            player.play(song);
            player.makeFavorite();

            expect(mockPersistFavoriteStatus.once().verify()).to.be.true;
        });

        //demonstrates use of expected exceptions
        describe('#resume', () => {
            it('should throw an exception if song is already playing', () => {
                player.play(song);

                expect(() => {
                    player.resume();
                }).to.throw('song is already playing');
            });
        });
    });
});
