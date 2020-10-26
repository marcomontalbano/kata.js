import { expect } from 'chai';

import HelloWorld from './HelloWorld';

describe('hello-world', () => {

    it('should exist.', () => {
        // given
        expect(() => {
            new HelloWorld();
        }).to.not.throw();
    });

    it('should greet() correcly.', () => {
        // given
        const helloWorld = new HelloWorld();

        // then
        expect(helloWorld.greet()).to.eql('Hello world');
    });
});
