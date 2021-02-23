const GMR = require('@wiicamp/graphql-merge-resolvers')
const game_stats = require('./game_stats')

const mainResolver = GMR.merge([
    game_stats
])

module.exports = mainResolver
