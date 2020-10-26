import { Person } from './Person'

export class Sir extends Person {
    secret(secret: string) {
        this.secrets.shift();

        super.secret(secret);
    }
}
