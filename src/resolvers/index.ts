import hello from './hello'
import rn from './ran-number'

const resolvers = {
  Query: {
    hello,
    randomNumber: rn,
  },
}

export default resolvers
