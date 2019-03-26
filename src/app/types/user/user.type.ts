import { GraphQLObjectType, GraphQLString } from 'graphql';

export const User = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        userName: {
            type: GraphQLString
        },
        userId: {
            type: GraphQLString
        },
        externalId: {
            type: GraphQLString
        },
        activeChannel: {
            type: GraphQLString
        },
    })
})