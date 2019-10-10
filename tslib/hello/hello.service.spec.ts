import * as tslib from '../index'

let sut: tslib.HelloService

describe('hello service', () => {
  beforeEach(() => {
    sut = new tslib.HelloService()
  })

  it('should be defined', () => {
    expect(sut).toBeDefined()
  })

  it('should return expected message', () => {
    const name = 'tests'
    expect(sut.say(name)).toBe(`hello from ${name} 👋🏼`)
  })

})