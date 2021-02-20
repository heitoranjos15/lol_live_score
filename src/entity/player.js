
const player = (playerData) => {
    const name = playerData.summonerName
    const champion = playerData.champion

    return { name }
}

const players = (teamData, teamSide='Blue') => {
    const sideKey = teamSide === 'Blue' ? 'blueTeam':'redTeam'
    const playerData = teamData.gameMetadata[`${sideKey}Metadata`].participantMetadata
    const playerStats = teamData.frames[sideKey].participants

    const roles = ['TOP', 'JUNGLE', 'MID', 'ADC', 'SUP']
    const playerList = []
    roles.forEach(role => playerList.push(player(role)))
}


module.exports = player