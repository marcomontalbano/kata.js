import { expect } from 'chai';
import { Mister } from './Mister';

describe('Mister', () => {
    let owner: Mister;
    let friend1: Mister;
    let friend2: Mister;

    describe('propagation', () => {
        beforeEach(() => {
            owner = new Mister('Mr. Blue');
            friend1 = new Mister('Mr. Pink');
            friend2 = new Mister('Mr. Brown');
        })

        it(`should not tell anything is there's nothing to tell`, () => {
            owner.addFriend(friend1);
            owner.propagate();
            expect(friend1.ask()).to.be.eql('');
        })

        it(`should forget about a secret if he/she doesn't have friends`, () => {
            owner.secret('Message1');
            owner.propagate();
            expect(owner.ask()).to.be.eql('');
        })

        it('should tell a secret to a friend and forget about it', () => {
            owner.addFriend(friend1);
            owner.secret('Message1');
            owner.propagate();
            expect(owner.ask()).to.be.eql('');
            expect(friend1.ask()).to.be.eql('Message1');
        })

        it('should tell a secret to multiple friends, one by one', () => {
            owner.addFriend(friend1);
            owner.addFriend(friend2);

            owner.secret('Message1');

            owner.propagate();
            expect(owner.ask()).to.be.eql('Message1');
            expect(friend1.ask()).to.be.eql('Message1');
            expect(friend2.ask()).to.be.eql('');

            owner.propagate();
            expect(owner.ask()).to.be.eql('');
            expect(friend1.ask()).to.be.eql('Message1');
            expect(friend2.ask()).to.be.eql('Message1');
        })

        it('should forget about previous secret if he/she receives a new secret', () => {
            owner.addFriend(friend1);
            owner.addFriend(friend2);

            owner.secret('Message1');
            owner.propagate();
            expect(owner.ask()).to.be.eql('Message1');
            expect(friend1.ask()).to.be.eql('Message1');
            expect(friend2.ask()).to.be.eql('');

            owner.secret('Message2');
            owner.propagate();
            expect(owner.ask()).to.be.eql('Message2');
            expect(friend1.ask()).to.be.eql('Message2');
            expect(friend2.ask()).to.be.eql('');
        })
    })
});