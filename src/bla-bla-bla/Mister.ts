import { Person } from './Person'

export class Mister extends Person {

    index: number = 0;

    secret(secret: string) {
        this.secrets.shift();
        this.index = 0;

        super.secret(secret);
    }

    propagate() {
        if (this.hasFriends()) {
            this.friends[this.index].secret(this.ask());
        }

        this.index++;

        if (this.index >= this.friends.length) {
            this.secrets.shift();
            this.index = 0;
        }
    }
}
