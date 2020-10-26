import { Person } from './Person'

export class Doctor extends Person {

    index: number = 0;

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
