const directiveTypes = require('./directive')

const typeDefs = `
  type ApiKey {
    id: ID
    roles: [String!]
  }

  type QueryApiKeys {
    listKeys: [ApiKey]
  }

  type Query {
    apiKeys: QueryApiKeys @jwtAuth
  }

  type MutationApiKeys {
    createKey: ApiKey @jwtAuth(scopes: ["edit:apikeys"])
    updateKey(
      id: ID
      roles: [String!]
    ): ApiKey @jwtAuth(scopes: ["edit:apikeys"])
    deleteKey(
      id: ID
    ): ApiKey
  }

  type Mutation {
    apiKeys: MutationApiKeys @jwtAuth
  }
`

module.exports = [
  directiveTypes,
  typeDefs,
]
