import { expect } from 'chai';

import { helloWorld } from './typescript';

describe('typescript', () => {
    it('can be used', () => {
        expect(helloWorld).to.be.eql('Hi all!');
    });
});