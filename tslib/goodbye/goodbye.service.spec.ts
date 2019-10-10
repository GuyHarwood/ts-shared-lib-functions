import * as tslib from '../../tslib/index'

let sut: tslib.GoodbyeService

describe('goodbye.service', () => {
  beforeEach(() => {
    sut = new tslib.GoodbyeService()
  })

  it('should be defined', () => {
    expect(sut).toBeDefined()
  })

  it('should return expected message', () => {
    const name = 'tests'
    expect(sut.say(name)).toBe(`Goodbye from ${name} ✌🏼`)
  })

})