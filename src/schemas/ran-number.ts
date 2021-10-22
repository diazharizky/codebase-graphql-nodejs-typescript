import { GraphQLObjectType, GraphQLInt } from 'graphql'

const schema = new GraphQLObjectType({
  name: 'RandomNumber',
  fields: {
    hello: {
      type: GraphQLInt!,
    },
  },
})

export default schema
