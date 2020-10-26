import { Person } from './Person'

export class Lady extends Person {

    secret(secret: string) {
        this.secrets.shift();

        super.secret(secret);
    }

    propagate() {
        this.friends.forEach(friend => {
            return friend.secret(this.ask());
        });

        this.secrets.shift();
    }
}
