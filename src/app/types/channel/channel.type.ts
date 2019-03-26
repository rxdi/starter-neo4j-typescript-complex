import { GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';
import { Message } from '../message/message.type';
import { ChannelTypeEnum } from './channel-enum.type';

export const Channel = new GraphQLObjectType({
    name: 'Channel',
    fields: () => ({
        channelId: {
            type: new GraphQLList(GraphQLString)
        },
        channelName: {
            type: new GraphQLList(GraphQLString)
        },
        subscribers: {
            type: new GraphQLList(GraphQLString)
        },
        messages: {
            type: new GraphQLList(Message)
        },
        channelType: {
            type: ChannelTypeEnum
        }
    })
})