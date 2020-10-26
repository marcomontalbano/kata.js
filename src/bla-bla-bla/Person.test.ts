import { expect } from 'chai';
import { Person } from './Person';

describe('Person', () => {
    let owner: Person;
    let friend1: Person;

    beforeEach(() => {
        owner = new Person('Mr. Blue');
        friend1 = new Person('Mr. Pink');
    });

    it('should be able to receive a secret', () => {
        owner.secret('Message1');
        expect(owner.secrets).to.be.eql(['Message1']);
    })

    it('should be able to say nothing if no secrets are present', () => {
        const secret = owner.ask();
        expect(secret).to.be.eql('');
    })

    it('should be able to be asked for a secret', () => {
        owner.secret('Message1');
        owner.secret('Message2');

        const secret = owner.ask();

        expect(secret).to.be.eql('Message1');
    })

    it('should have friends', () => {
        owner.addFriend(friend1);
        expect(owner.friends).to.be.eql([friend1]);
    })
});