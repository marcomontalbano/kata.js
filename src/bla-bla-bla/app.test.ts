import { expect } from 'chai';
import { app } from './app';

describe('app', () => {
    beforeEach(() => {
        app.people = {}
    })

    it(`should throw an error when talking with an unexisting person`, () => {
        expect(() => {
            app.talksWith('John Doe', 'Mr. Pink');
        }).to.throw('Unknow person: John Doe');

        expect(() => {
            app.talksWith('Mr. Pink', 'Davide Rossi');
        }).to.throw('Unknow person: Davide Rossi');

        expect(() => {
            app.talksWith('John Doe', 'Davide Rossi');
        }).to.throw('Unknow person: John Doe');
    })

    it('Scenario 1', () => {
        app.talksWith('Mr. Blue','Mr. Pink')
        app.secret('Mr. Blue','Message1')
        expect(app.ask('Mr. Blue')).to.be.eql('Message1')
        expect(app.ask('Mr. Pink')).to.be.eql('')

        app.propagate()
        expect(app.ask('Mr. Pink')).to.be.eql('Message1')
        expect(app.ask('Mr. Blue')).to.be.eql('')
    })

    it('Scenario 2', () => {
        app.talksWith('Mr. Blue','Mr. Pink')
        app.talksWith('Mr. Blue','Mr. Brown')
        app.secret('Mr. Blue','Message2')

        app.propagate()
        expect(app.ask('Mr. Pink')).to.be.eql('Message2')
        expect(app.ask('Mr. Brown')).to.be.eql('')
        expect(app.ask('Mr. Blue')).to.be.eql('Message2')

        app.propagate()
        expect(app.ask('Mr. Brown')).to.be.eql('Message2')
        expect(app.ask('Mr. Blue')).to.be.eql('')
        expect(app.ask('Mr. Pink')).to.be.eql('')
    })

    it('Scenario 3', () => {
        app.talksWith('Mr. Blue','Mr. Pink')
        app.talksWith('Mr. Blue','Mr. Brown')

        app.secret('Mr. Blue', 'Message3')

        app.propagate()
        expect(app.ask('Mr. Pink')).to.be.eql('Message3')
        app.secret('Mr. Blue', 'Message4')

        app.propagate()
        expect(app.ask('Mr. Pink')).to.be.eql('Message4')
        expect(app.ask('Mr. Brown')).to.be.eql('')
    })

    it('Scenario 4', () => {
        app.talksWith('Lady Violet','Mr. Blue')
        app.talksWith('Lady Violet','Mr. Brown')
        app.secret('Lady Violet', 'Message5')
        app.propagate()
        expect(app.ask('Mr. Blue')).to.be.eql('Message5')
        expect(app.ask('Mr. Brown')).to.be.eql('Message5')
        expect(app.ask('Lady Violet')) .to.be.eql('')
    })

    it('Scenario 5', () => {
        app.talksWith('Dr. Black','Mr. Blue')
        app.talksWith('Dr. Black','Mr. Pink')
        app.secret('Dr. Black', 'Message6')
        app.propagate()
        expect(app.ask('Mr. Blue')).to.be.eql('Message6')
        expect(app.ask('Mr. Pink')).to.be.eql('')
        app.secret('Dr. Black', 'Message7')
        app.propagate()
        expect(app.ask('Mr. Pink')).to.be.eql('Message6')
        app.propagate()
        expect(app.ask('Mr. Blue')).to.be.eql('Message7')
    })

    it('Scenario 6', () => {
        app.talksWith('Sir Grey','Dr. Black')
        app.secret('Sir Grey', 'Message8')
        app.propagate()
        expect(app.ask('Dr. Black')).to.be.eql('')
        expect(app.ask('Sir Grey')).to.be.eql('Message8')
    })
});