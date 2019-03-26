import { GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';
import { User } from './user.type';
import { Channel } from '../channel/channel.type';

export const UserContext = new GraphQLObjectType({
    name: 'UserContext',
    fields: () => ({
        user: {
            type: User
        },
        channels: {
            type: new GraphQLList(Channel)
        },
        blockedUsers: {
            type: new GraphQLList(GraphQLString)
        }
    })
})