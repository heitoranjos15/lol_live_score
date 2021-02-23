const { ApolloServer } = require('apollo-server-lambda')
const typeDefs = require('./schemas')
const resolvers = require('./resolvers')

const server = new ApolloServer({ typeDefs, resolvers })

module.exports = {
  handler: server.createHandler()
}
