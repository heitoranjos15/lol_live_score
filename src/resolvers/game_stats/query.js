const { getGameStats } = require('../../lib/game')


const gameStats = async (_, { gameId }) => getGameStats(gameId)

module.exports = {
    gameStats
}
