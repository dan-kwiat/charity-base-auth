require('dotenv').config()
const express = require('express')
const graphqlHTTP = require('express-graphql')
const { log } = require('./helpers')
const schema = require('./graphql')

log.info(`Starting process with NODE_ENV=${process.env.NODE_ENV}`)

const listenPort = process.env.PORT || 4001

const app = express()

app.use('/auth/graphql', graphqlHTTP({
  schema,
  graphiql: false,
}))
app.listen(listenPort, () => {
  log.info(`Listening on port ${listenPort}`)
})

process.on('uncaughtException', err => {
  log.error(err)
  process.exit(1)
})
