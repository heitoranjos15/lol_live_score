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
    maxHealth
}
