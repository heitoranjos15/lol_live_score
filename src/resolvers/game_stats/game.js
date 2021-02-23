const { gameDetailsRequest } = require('../../lib/game')


const status = ({ stats: { frames } }) => {
    return frames[0].gameState
}

const getTeamSide = (sides, teamCode) => sides.filter(({ id: sideTeamCode }) => sideTeamCode === teamCode)[0]

const getTeamStats = (stats, side) => {
    const { gameMetadata: gameInfo, frames: gameLive } = stats
    const sideKey = side === 'blue' ? 'blueTeam':'redTeam'
    const { participantMetadata: playerDetails } = gameInfo[`${sideKey}Metadata`]
    const teamStats = gameLive[0][sideKey]
    return { playerDetails, teamStats }
}

const teams = async ({ stats }) => {
    const { esportsMatchId: matchId } = stats
    
    const details = await gameDetailsRequest(matchId)
    const {
        match: {
            teams: teamsDetails,
            games
        }
    } = details

    const { teams: sides } = games[0]

    return teamsDetails.map(teamInfo => {
        const { id: teamCode } = teamInfo
        const { side } = getTeamSide(sides, teamCode)
        const { teamStats, playerDetails } = getTeamStats(stats, side)
        return { teamInfo, side, teamStats, playerDetails }
    })
}


module.exports = {
    status,
    teams
}
