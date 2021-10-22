import { GraphQLSchema, GraphQLObjectType, printSchema } from 'graphql'
import hello from './hello'
import ranNumber from './ran-number'

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: { hello: { type: hello }, ranNumber: { type: ranNumber } },
  }),
})

export default printSchema(schema)
