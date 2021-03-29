const { ApolloServer } = require('apollo-server-lambda')
const typeDefs = require('./schemas')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: "/local/graphql"
  },
  context: ({ event }) => {
    const { headers: { Authorization: token }} = event
  }
})

module.exports = {
  handler: server.createHandler()
}
