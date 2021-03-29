const request = require('../../modules/integration')
const cache = require('../../modules/cache')
const config = require('../../configs')

const eventsRequest = () => async () => {
    console.log('aloooo')
    const options = {
        method: 'get',
        url: `${config.EVENTS_URL}/persisted/gw/getSchedule?hl=en-US`,
        headers: {
            'x-api-key': '0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z'
        } 
    }
    
    const { data: { data : { schedule: { events } } } } = await request(options)
    return events
}

const eventDetailsRequest = eventId => async () => {
    const options = {
        method: 'get',
        url: `${config.EVENTS_URL}/persisted/gw/getEventDetails?hl=en-US&id=${eventId}`,
        headers: {
            'x-api-key': '0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z'
        } 
    }
    
    const { data: { data : { event } } } = await request(options)
    return event
}

const getEvents = () => cache(
    'events',
    'list',
    eventsRequest()
)

const getEventDetails = (eventId) => cache(
    'event_details',
    eventId,
    eventDetailsRequest(eventId)
)

module.exports = {
    getEvents,
    getEventDetails
}
