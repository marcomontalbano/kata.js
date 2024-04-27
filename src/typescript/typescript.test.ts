import { it, expect } from 'vitest'

import { helloWorld } from './typescript'

it('can be used', () => {
    expect(helloWorld).to.be.eql('Hi all!');
});