const { getGamePlayerDetails } = require('../../lib/game')


const name = ({ playerDetails: { summonerName } }) => summonerName

const position = ({ playerDetails: { role } }) => role.toUpperCase()

const champion = ({ playerDetails: { championId } }) => championId

const gold = ({ playerStats: { totalGold } }) => totalGold

const level = ({ playerStats: { level } }) => level

const kills = ({ playerStats: { kills } }) => kills

const deaths = ({ playerStats: { deaths } }) => deaths

const assists = ({ playerStats: { assists } }) => assists

const farm = ({ playerStats: { creepScore } }) => creepScore

const currentHealth = ({ playerStats: { currentHealth } }) => currentHealth

const maxHealth = ({ playerStats: { maxHealth } }) => maxHealth

const items = async ({ playerDetails, gameId }) => {
    const gamePlayerDetails = await getGamePlayerDetails(gameId)
    const { frames: gamePlayerStatus } = gamePlayerDetails
    const { participants: playersDetails } = gamePlayerStatus.slice(-1)[0]
    const { items: playerItems } = playersDetails.filter(
        ({participantId}) => participantId === playerDetails.participantId)[0]
    return playerItems
}

module.exports = {
    name,
    position,
    champion,
    gold,
    farm,
    level,
    kills,
    deaths,
    assists,
    currentHealth,
    maxHealth,
    items
}
