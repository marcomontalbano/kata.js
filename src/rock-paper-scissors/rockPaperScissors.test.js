import { expect } from 'chai';
import { stub } from 'sinon';

import rockPaperScissors from './rockPaperScissors';

describe('rock-paper-scissors', () => {
    describe('Player', () => {

        let player, elements;

        beforeEach(() => {
            player = new rockPaperScissors.Player();

            elements = [
                'rock',
                'paper',
                'scissors'
            ];
        });

        it('should exist.', () => {
            // given
            expect(() => {
                new rockPaperScissors.Player();
            }).to.not.throw();
        });

        it('should know that elements are "rock", "paper" and "scissors".', () => {
            expect(player.elements).to.eql(elements);
        });

        describe('the method "play".', () => {
            it('should exist.', () => {
                expect(player.play).to.be.a('function');
            });

            it('should always says "rock" or "paper" or "scissors".', () => {
                // given
                for (var i = 0; i < 1000; i++) {
                    expect(elements).to.contains(player.play());
                }
            });
        });

    });


    describe('Game', () => {

        let rockPlayer, paperPlayer, scissorsPlayer, craftyPlayer,
            rock_vs_rock, paper_vs_paper, scissors_vs_scissors,
            rock_vs_scissors, rock_vs_paper,
            paper_vs_rock, paper_vs_scissors,
            scissors_vs_rock, scissors_vs_paper;

        beforeEach(() => {
            // players
            rockPlayer = new rockPaperScissors.Player();
            paperPlayer = new rockPaperScissors.Player();
            scissorsPlayer = new rockPaperScissors.Player();
            craftyPlayer = new rockPaperScissors.Player();

            stub(rockPlayer, 'play').returns('rock');
            stub(paperPlayer, 'play').returns('paper');
            stub(scissorsPlayer, 'play').returns('scissors');
            stub(craftyPlayer, 'play').returns('crafty');

            // games
            rock_vs_rock = new rockPaperScissors.Game(rockPlayer, rockPlayer);
            paper_vs_paper = new rockPaperScissors.Game(paperPlayer, paperPlayer);
            scissors_vs_scissors = new rockPaperScissors.Game(scissorsPlayer, scissorsPlayer);

            rock_vs_scissors = new rockPaperScissors.Game(rockPlayer, scissorsPlayer);
            rock_vs_paper = new rockPaperScissors.Game(rockPlayer, paperPlayer);

            paper_vs_rock = new rockPaperScissors.Game(paperPlayer, rockPlayer);
            paper_vs_scissors = new rockPaperScissors.Game(paperPlayer, scissorsPlayer);

            scissors_vs_rock = new rockPaperScissors.Game(scissorsPlayer, rockPlayer);
            scissors_vs_paper = new rockPaperScissors.Game(scissorsPlayer, paperPlayer);
        });

        it('should exist.', () => {
            // given
            expect(() => {
                new rockPaperScissors.Game(new rockPaperScissors.Player(), new rockPaperScissors.Player());
            }).to.not.throw();
        });

        it('is drawn when equal elements are selected.', () => {
            // then
            expect(rock_vs_rock.play()).to.eql('drawn');
            expect(paper_vs_paper.play()).to.eql('drawn');
            expect(scissors_vs_scissors.play()).to.eql('drawn');
        });

        it('"crafty players" will lose.', () => {
            // given
            const crafty_vs_rock = new rockPaperScissors.Game(craftyPlayer, rockPlayer);
            const paper_vs_crafty = new rockPaperScissors.Game(paperPlayer, craftyPlayer);
            const crafty_vs_scissors = new rockPaperScissors.Game(craftyPlayer, scissorsPlayer);

            // then
            expect(crafty_vs_rock.play()).to.be.false;
            expect(paper_vs_crafty.play()).to.be.false;
            expect(crafty_vs_scissors.play()).to.be.false;
        });

        it('"rock" beats "scissors".', () => {
            expect(rock_vs_scissors.play()).to.eql(rockPlayer);
            expect(scissors_vs_rock.play()).to.eql(rockPlayer);
        });

        it('"scissors" beats "paper".', () => {
            expect(scissors_vs_paper.play()).to.eql(scissorsPlayer);
            expect(paper_vs_scissors.play()).to.eql(scissorsPlayer);
        });

        it('"paper" beats "rock".', () => {
            expect(paper_vs_rock.play()).to.eql(paperPlayer);
            expect(rock_vs_paper.play()).to.eql(paperPlayer);
        });

    });

});
