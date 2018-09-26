import { expect } from 'chai'

describe('foo', () => {
  it('should not be bar', () => {
    expect('foo').not.to.equal('bar')
  })
})
