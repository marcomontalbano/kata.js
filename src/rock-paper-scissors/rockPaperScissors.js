const ELEMENTS = [
    'rock', 'paper', 'scissors'
];

class Game {
    constructor(player_a, player_b) {
        this.player_a = {
            player: player_a,
            played: player_a.play(),
            is_valid: function() {
                return ELEMENTS.includes(this.played);
            }
        };

        this.player_b = {
            player: player_b,
            played: player_b.play(),
            is_valid: function() {
                return ELEMENTS.includes(this.played);
            }
        };
    }

    play() {
        // check players
        if (!this.player_a.is_valid()) return false;
        if (!this.player_b.is_valid()) return false;

        // check for "draw"
        if (this.player_a.played === this.player_b.played) return 'drawn';

        // check for "win"
        if (
            (this.player_a.played === 'rock' && this.player_b.played === 'scissors') ||
            (this.player_a.played === 'scissors' && this.player_b.played === 'paper') ||
            (this.player_a.played === 'paper' && this.player_b.played === 'rock')
        ) {
            return this.player_a.player;
        }

        return this.player_b.player;
    }
}

class Player {

    constructor() {
        this.elements = [...ELEMENTS];
    }

    play() {
        const rnd = Math.floor(Math.random() * ((ELEMENTS.length - 1) + 1));
        return ELEMENTS[rnd];
    }
}

export default {
    Game,
    Player
};
