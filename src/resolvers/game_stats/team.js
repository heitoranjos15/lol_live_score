const name = ({ teamInfo: { name } }) => name

const barons = ({ teamStats: { barons } }) => barons

const dragons = ({ teamStats: { dragons } }) => dragons

const inhibitors = ({ teamStats: { inhibitors } }) => inhibitors

const towers = ({ teamStats: { towers } }) => towers

const gold = ({ teamStats: { totalGold } }) => totalGold

const kills = ({ teamStats: { totalKills } }) => totalKills

const side = ({ side }) => side.toUpperCase()

const players = ({ teamStats: { participants }, playerDetails, gameId }) => playerDetails
    .map(playerDetails => {
        const { participantId: detailsCode } = playerDetails
        const playerStats = participants
            .filter(({ participantId: statsCode }) => detailsCode === statsCode)[0]
        return { playerDetails, playerStats, gameId }
    })

module.exports = {
    name,
    barons,
    dragons,
    towers,
    inhibitors,
    gold,
    kills,
    side,
    players
}
