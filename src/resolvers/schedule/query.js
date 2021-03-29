const { getEvents } = require('../../lib/event')

const ENUM_STATUS = {
    IN_PROGRESS: 'inProgress',
    COMPLETED: 'completed',
    UNSTARTED: 'unstarted'
}

const matches = async (_, { date, status }) =>{
    let events = await getEvents()
    return events.filter(event => {
        const { startTime, state: eventStatus } = event
        const eventDate = startTime.split('T')[0]

        if(date && status) return eventDate === date && eventStatus == ENUM_STATUS[status]

        if(date) return eventDate === date 
 
        if(status) return eventStatus == ENUM_STATUS[status]
        
        return event
    })
} 

module.exports = {
    matches
}
