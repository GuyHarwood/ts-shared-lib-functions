import * as tslib from '../../tslib/src/MyService'

let sut: tslib.MyService

describe('myservice', () => {
  beforeEach(() => {
    sut = new tslib.MyService()
  })

  it('should be defined', () => {
    expect(sut).toBeDefined()
  })

  it('should return expected message', () => {
    expect(sut.call()).toBe('hello from myservice')
  })

})