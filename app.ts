import config from 'config'
import { ApolloServer } from 'apollo-server'
import resolvers from './src/resolvers'
import typeDefs from './src/schemas'
import log from './src/utils/log'

const server = new ApolloServer({ typeDefs, resolvers })

export default async () => {
  const listenPort: number = config.get('listen_port')
  const listenHost: number = config.get('listen_host')
  server.listen(listenPort, listenHost, () =>
    log.info({ msg: 'app_server', host: listenHost, port: listenPort })
  )
}
