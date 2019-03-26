import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql';
import { AttachmentType } from '../attachment/attachment.type';
import { MessageEnumType } from './message-enum.type';

export const Message = new GraphQLObjectType({
  name: 'Message',
  fields: () => ({
    messageId: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    },
    attachment: {
      type: AttachmentType
    },
    senderName: {
      type: GraphQLString
    },
    date: {
      type: GraphQLString
    },
    channelId: {
      type: GraphQLString
    },
    messageType: {
      type: MessageEnumType
    },
    timestamp: {
      type: GraphQLInt
    },
    endOfLifeTimestamp: {
      type: GraphQLInt
    },
    seen: {
      type: GraphQLBoolean
    },
    own: {
      type: GraphQLBoolean
    },
    important: {
      type: GraphQLBoolean
    },
    loading: {
      type: GraphQLBoolean
    },
    profileImage: {
      type: GraphQLString
    }
  })
});
