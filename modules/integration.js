const axios = require('axios')
const request = async options =>  axios(options).catch(error => {
    console.log(`Integration error ${error}`)
    throw error
})

module.exports = request