const { gameStatsRequest } = require('../../lib/game')


const gameStats = async (_, { gameId }) => gameStatsRequest(gameId)

module.exports = {
    gameStats
}
