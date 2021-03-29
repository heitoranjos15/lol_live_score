const axios = require('axios')
const request = async options => axios(options).catch(({ response }) => {
    console.log(`Integration error`, response.data)
    throw new Error('NOT_POSSIBLE_TO_LOAD')
})

module.exports = request