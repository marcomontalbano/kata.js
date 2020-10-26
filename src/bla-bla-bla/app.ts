import { Doctor } from './Doctor';
import { Lady } from './Lady';
import { Mister } from './Mister';
import { Person } from './Person';
import { Sir } from './Sir';

class App {

    people: {
        [key: string]: Person
    } = {};

    notified: Person[] = []

    private instancePerson(who: string): Person {
        const [type] = who.split(' ');

        switch (type) {
            case 'Mr.':
                return new Mister(who);
            case 'Lady':
                return new Lady(who);
            case 'Dr.':
                return new Doctor(who);
            case 'Sir':
                return new Sir(who);
            default:
                throw new Error(`Unknow person: ${who}`);
        }
    }

    private getOrCreatePerson(who: string): Person {
        if (this.people[who] === undefined) {
            this.people[who] = this.instancePerson(who);
        }

        return this.people[who];
    }

    talksWith(senderName: string, receiverName: string) {
        const sender = this.getOrCreatePerson(senderName);
        const receiver = this.getOrCreatePerson(receiverName);

        sender.addFriend(receiver);
    }

    secret(name: string, secret: string) {
        const person = this.getOrCreatePerson(name);
        person.secret(secret);
    }

    ask(name: string) {
        const person = this.getOrCreatePerson(name);
        return person.ask();
    }

    propagate() {
        this.notified = [];

        Object.entries(this.people).forEach(([name, person]) => {
            const justNotified = this.notified.find(notifiedPerson => notifiedPerson.name === person.name);

            if (!justNotified) {
                person.propagate();
                this.notified.push(...person.notified)
            }
        });
    }

}

export const app = new App();