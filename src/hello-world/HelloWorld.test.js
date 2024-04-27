import { describe, it, expect } from 'vitest';

import HelloWorld from './HelloWorld'

describe('HelloWorld', () => {

    it('should exist.', () => {
        // given
        expect(() => {
            new HelloWorld();
        }).to.not.throw();
    });

    it('should greet() correctly.', () => {
        // given
        const helloWorld = new HelloWorld();

        // then
        expect(helloWorld.greet()).to.eql('Hello world');
    });
});
