const request = require('../../modules/integration')
const cache = require('../../modules/cache')
const config = require('../../configs')


const startingTime = () => {
    const date = new Date()
    let seconds = date.getUTCSeconds()
    if (seconds % 10 > 0){
        seconds = (seconds - (seconds % 10)) 
    }
    date.setUTCSeconds(seconds - 60) // needs to have 45 seconds delay
    date.setUTCMilliseconds(0)
    return date.toISOString()
}


const gamePlayerDetailsRequest = gameId => async () => {
    const options = {
        method: 'get',
        url: `${config.GAME_LIVE_URL}/livestats/v1/details/${gameId}?startingTime=${startingTime()}`,
        headers: {
            'x-api-key': '0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z'
        }
    }
    const { data } = await request(options)
    return data
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
    const options = {
        method: 'get',
        url: `${config.GAME_LIVE_URL}/livestats/v1/window/${gameId}?startingTime=${startingTime()}`
    }
    
    const { data: stats } = await request(options)
    return { stats }
}

const getGamePlayerDetails = gameId => cache(
    'player_details',
    gameId,
    gamePlayerDetailsRequest(gameId)
)

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
    getGameStats,
    getGamePlayerDetails
}
