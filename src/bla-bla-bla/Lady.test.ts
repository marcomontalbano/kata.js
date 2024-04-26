import { describe, beforeEach, it } from 'vitest'

import { expect } from 'chai';
import { Lady } from './Lady';

describe('Lady', () => {
    let owner: Lady;
    let friend1: Lady;
    let friend2: Lady;

    describe('propagation', () => {
        beforeEach(() => {
            owner = new Lady('Lady Violet');
            friend1 = new Lady('Lady Pink');
            friend2 = new Lady('Lady Unicorn');
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

        it('should tell a secret to multiple friends, all in one', () => {
            owner.addFriend(friend1);
            owner.addFriend(friend2);

            owner.secret('Message1');

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
            expect(owner.ask()).to.be.eql('');
            expect(friend1.ask()).to.be.eql('Message1');
            expect(friend2.ask()).to.be.eql('Message1');

            owner.secret('Message2');
            owner.propagate();
            expect(owner.ask()).to.be.eql('');
            expect(friend1.ask()).to.be.eql('Message2');
            expect(friend2.ask()).to.be.eql('Message2');
        })
    })
});