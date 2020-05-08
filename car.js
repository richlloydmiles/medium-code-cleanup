const DbUtil = require('./dbUtil')

class Car {
  constructor(id) {
    this.id = id
    this.brand = DbUtil.getBrandById(id)
  }

  getFormattedBrandName() {
    return (
      this.brand.charAt(0).toUpperCase() + this.brand.substring(1)
    )
  }
}

module.exports = Car
