const request = require('../../modules/integration')
const config = require('../../configs')


const formatDate = date => {
    let seconds = date.getUTCSeconds()
    seconds = seconds - (seconds % 10)
    
    date.setUTCSeconds(seconds)
    date.setUTCMilliseconds(000)
    return date.toISOString()
}

const gameDetailsRequest = async matchId => {
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

const gameStatsRequest = async gameId => {
    const date = new Date()
    const options = {
        method: 'get',
        url: `${config.GAME_LIVE_URL}/livestats/v1/window/${gameId}`
    }
    
    const { data: stats } = await request(options)
    return { stats }
} 


module.exports = {
    gameDetailsRequest,
    gameStatsRequest
}
