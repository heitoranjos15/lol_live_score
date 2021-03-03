const request = require('../../modules/integration')
const cache = require('../../modules/cache')
const config = require('../../configs')


const formatDate = date => {
    let seconds = date.getUTCSeconds()
    seconds = (seconds - (seconds % 10)) - 20
    
    date.setUTCSeconds(seconds)
    date.setUTCMilliseconds(000)
    return date.toISOString()
}

const gameDetailsRequest = (matchId) => async () => {
    const options = {
        method: 'get',
        url: `${config.EVENTS_URL}/persisted/gw/getEventDetails?hl=en-US&id=${matchId}`,
        headers: {
            'x-api-key': '0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z'
        }
    }
    const { data: { data: { event } } } = await request(options)
    return event
}

const gameStatsRequest = (gameId) => async () => {
    const date = new Date()
    const options = {
        method: 'get',
        url: `${config.GAME_LIVE_URL}/livestats/v1/window/${gameId}?startingTime=${formatDate(date)}`
    }
    
    const { data: stats } = await request(options)
    return { stats }
}

const getGameDetails = matchId => cache(
    'game_details',
    matchId,
    gameDetailsRequest(matchId)
)

const getGameStats = gameId => cache(
    'game_stats',
    gameId,
    gameStatsRequest(gameId)
)

module.exports = {
    getGameDetails,
    getGameStats
}
