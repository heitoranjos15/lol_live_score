const request = require('../../../modules/integration')
const config = require('../../../configs')
const formatDate = require('../../libs/formatDate')

const gameStats = (parent, { gameId }) => {
    const date = new Date()
    const options = {
        method: 'post',
        url: `${config.GAME_LIVE_URL}/livestats/v1/window/${gameId}/startingTime=${formatDate(date)}`
    }
    const { data } = request(options)
    return { liveGame: data  }
}

module.exports = { gameStats }
