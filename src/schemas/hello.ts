import { GraphQLObjectType, GraphQLString } from 'graphql'

const schema = new GraphQLObjectType({
  name: 'HelloWorld',
  fields: {
    hello: {
      type: GraphQLString!,
    },
  },
})

export default schema
