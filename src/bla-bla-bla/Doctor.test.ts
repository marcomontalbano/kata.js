import { describe, beforeEach, it } from 'vitest'

import { expect } from 'chai';
import { Doctor } from './Doctor';

describe('Doctor', () => {
    let owner: Doctor;
    let doctor1: Doctor;
    let doctor2: Doctor;

    describe('propagation', () => {
        beforeEach(() => {
            owner = new Doctor('Dr. Blue');
            doctor1 = new Doctor('Dr. Pink');
            doctor2 = new Doctor('Dr. Brown');
        })

        it(`should not tell anything is there's nothing to tell`, () => {
            owner.addFriend(doctor1);
            owner.propagate();
            expect(doctor1.ask()).to.be.eql('');
        })

        it(`should forget about a secret if he/she doesn't have friends`, () => {
            owner.secret('Message1');
            owner.propagate();
            expect(owner.ask()).to.be.eql('');
        })

        it('should tell a secret to a friend and forget about it', () => {
            owner.addFriend(doctor1);
            owner.secret('Message1');
            owner.propagate();
            expect(owner.ask()).to.be.eql('');
            expect(doctor1.ask()).to.be.eql('Message1');
        })

        it('should tell a secret to multiple friends, one by one', () => {
            owner.addFriend(doctor1);
            owner.addFriend(doctor2);

            owner.secret('Message1');

            owner.propagate();
            expect(owner.ask()).to.be.eql('Message1');
            expect(doctor1.ask()).to.be.eql('Message1');
            expect(doctor2.ask()).to.be.eql('');

            owner.propagate();
            expect(owner.ask()).to.be.eql('');
            expect(doctor1.ask()).to.be.eql('Message1');
            expect(doctor2.ask()).to.be.eql('Message1');
        })

        it('should forget about previous secret if he/she receives a new secret', () => {
            owner.addFriend(doctor1);
            owner.addFriend(doctor2);

            owner.secret('Message1');
            owner.propagate();
            expect(owner.ask()).to.be.eql('Message1');
            expect(doctor1.ask()).to.be.eql('Message1');
            expect(doctor2.ask()).to.be.eql('');

            owner.secret('Message2');
            owner.propagate();
            expect(owner.ask()).to.be.eql('Message2');
            expect(doctor1.ask()).to.be.eql('Message1');
            expect(doctor2.ask()).to.be.eql('Message1');

            owner.propagate();
            expect(owner.ask()).to.be.eql('Message2');
            expect(doctor1.ask()).to.be.eql('Message1');
            expect(doctor2.ask()).to.be.eql('Message1');
        })
    })
});