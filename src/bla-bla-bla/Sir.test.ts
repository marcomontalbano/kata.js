import { describe, beforeEach, it, expect } from 'vitest';

import { Sir } from './Sir';

describe('Sir', () => {
    let owner: Sir;
    let sir1: Sir;
    let sit2: Sir;

    describe('propagation', () => {
        beforeEach(() => {
            owner = new Sir('Sir Blue');
            sir1 = new Sir('Sir Pink');
            sit2 = new Sir('Sir Brown');
        })

        it(`should not tell anything is there's nothing to tell`, () => {
            owner.addFriend(sir1);
            owner.propagate();
            expect(sir1.ask()).to.be.eql('');
        })

        it(`shouldn't forget about a secret if he/she doesn't have friends`, () => {
            owner.secret('Message1');
            owner.propagate();
            expect(owner.ask()).to.be.eql('Message1');
        })

        it(`shouldn't tell secrets to friends`, () => {
            owner.addFriend(sir1);
            owner.secret('Message1');
            owner.propagate();
            expect(owner.ask()).to.be.eql('Message1');
            expect(sir1.ask()).to.be.eql('');
        })

        it('should forget about previous secret if he receives a new secret', () => {
            owner.addFriend(sir1);
            owner.addFriend(sit2);

            owner.secret('Message1');
            owner.propagate();
            expect(owner.ask()).to.be.eql('Message1');
            expect(sir1.ask()).to.be.eql('');
            expect(sit2.ask()).to.be.eql('');

            owner.secret('Message2');
            owner.propagate();
            expect(owner.ask()).to.be.eql('Message2');
            expect(sir1.ask()).to.be.eql('');
            expect(sit2.ask()).to.be.eql('');
        })
    })
});