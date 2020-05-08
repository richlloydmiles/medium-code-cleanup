// const axios = require('axios')
class DbUtil {
  async getBrandById(id) {
    return await axios.get('https://example.com/brand' + id)
  }
}

module.exports = DbUtil
