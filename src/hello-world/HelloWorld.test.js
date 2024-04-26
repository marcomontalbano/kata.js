import { describe, it } from 'vitest'

import { expect } from 'chai'

import HelloWorld from './HelloWorld'

describe('HelloWorld', () => {

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
