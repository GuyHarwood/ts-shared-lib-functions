import * as tslib from '../../tslib/src/hello.service'

let sut: tslib.HelloService

describe('myservice', () => {
  beforeEach(() => {
    sut = new tslib.HelloService()
  })

  it('should be defined', () => {
    expect(sut).toBeDefined()
  })

  it('should return expected message', () => {
    const name = 'tests'
    expect(sut.say(name)).toBe(`hello from ${name}`)
  })

})