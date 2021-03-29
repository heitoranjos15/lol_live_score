const { getGameDetails } = require('../../lib/game')

const status = ({ stats: { frames } }) => {
    if(frames) return frames.slice(-1)[0].gameState
    return 'un_started'
}
const getGameSides = (games, gameId) => games.filter(({ id: gameCode }) => gameCode === gameId)[0].teams

const getTeamSide = (sides, teamCode) => sides.filter(({ id: sideTeamCode }) => sideTeamCode === teamCode)[0]

const getTeamStats = (stats, side) => {
    const { gameMetadata: gameInfo, frames: gameLive } = stats
    const sideKey = side === 'blue' ? 'blueTeam':'redTeam'
    const { participantMetadata: playerDetails } = gameInfo[`${sideKey}Metadata`]
    const teamStats = gameLive.slice(-1)[0][sideKey]
    return { playerDetails, teamStats }
}

const teams = async ({ stats }) => {
    const { esportsMatchId: matchId, esportsGameId: gameId } = stats
    
    const details = await getGameDetails(matchId)
    
    if(!details) throw Error('GAME_NOT_STARTED')
    
    const {
        match: {
            teams: teamsDetails,
            games
        }
    } = details

    const sides = getGameSides(games, gameId)

    return teamsDetails.map(teamInfo => {
        const { id: teamCode } = teamInfo
        const { side } = getTeamSide(sides, teamCode)
        const { teamStats, playerDetails } = getTeamStats(stats, side)
        return { teamInfo, side, teamStats, playerDetails, gameId }
    })
}

module.exports = {
    status,
    teams
}
