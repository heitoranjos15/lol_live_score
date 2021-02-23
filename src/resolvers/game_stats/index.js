const game = require('./game')
const player = require('./player')
const team = require('./team')
const query = require('./query')

module.exports = {
    GameStats: game,
    Team: team,
    Player: player,
    Query: query
}
