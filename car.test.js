const Car = require('./car')

jest.mock('./dbUtil', () => {
  return {
    getBrandById: () => 'ford',
  }
})

describe('getFormattedBrandName', () => {
  test('should format the name of a given car brand', () => {
    // ford has the ID of 1
    mycar = new Car(1)
    expect(mycar.getFormattedBrandName()).toEqual('Ford')
  })
})
