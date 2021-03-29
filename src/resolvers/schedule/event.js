const { getEventDetails } = require('../../lib/event')

const eventId = async event => {
    const { match } = event
    if (match) return match.id
}
const startTime = async event => event.startTime

const status = async event => event.state

const eventType = async event => event.type

const league = async event => event.league.name

const bestOf = async event => {
    const { match } = event
    if (match) return match.strategy.count
}
const games = async event => {
    const { match } = event
    if(match) {
        const eventId = match.id
        const eventDetails = await getEventDetails(eventId)
        return eventDetails.match.games
    }
}

module.exports = {
    eventId,
    startTime,
    status,
    eventType,
    league,
    bestOf,
    games
}
