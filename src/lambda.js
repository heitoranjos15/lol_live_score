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
    console.log(event)
    const { headers: { Authorization: token }} = event
    console.log(token)
  }
})

module.exports = {
  handler: server.createHandler()
}
