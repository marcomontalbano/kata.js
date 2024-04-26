import { it } from 'vitest'

import { expect } from 'chai'

import { helloWorld } from './typescript'

it('can be used', () => {
    expect(helloWorld).to.be.eql('Hi all!');
});