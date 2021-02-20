const formatDate = date => {
    let seconds = date.getUTCSeconds()
    let milliseconds = date.getUTCMilliseconds()
    seconds = second - (seconds % 10)
    milliseconds = milliseconds - (milliseconds % 100)
    
    date.setUTCSeconds(seconds)
    date.setUTCMilliseconds(milliseconds)
    return date
}

module.exports = formatDate
