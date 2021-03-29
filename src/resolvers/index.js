const GMR = require('@wiicamp/graphql-merge-resolvers')
const game_stats = require('./game_stats')
const schedule = require('./schedule')

const mainResolver = GMR.merge([
    game_stats,
    schedule
])

module.exports = mainResolver
