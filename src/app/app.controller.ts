import { Controller, Type, Mutation, GraphQLString, Query, Interceptor, Subscription, Subscribe, PubSubService, withFilter } from "@gapi/core";
import { Message } from "./types/message/message.type";
import { GraphQLContext } from "./app.context";
import { GraphQLList, GraphQLNonNull, GraphQLInt } from "graphql";
import { graphRequest } from "@rxdi/neo4j";
import { IMessage } from "./core/api-introspection";
import { LoggerInterceptor } from "./core/interceptors/logger.interceptor";
// import { AdminOnly } from "./core/guards/admin-only.guard";

@Controller()
export class AppQueriesController {

  constructor(
    private pubsub: PubSubService
  ) {}

  @Interceptor(LoggerInterceptor)
  @Type(Message)
  // @Guard(AdminOnly)
  @Mutation({
    messageId: {
      type: GraphQLString
    },
    channelId: {
      type: GraphQLString
    }
  })
  async CreateMessage(root, params, ctx: GraphQLContext, resolveInfo): Promise<IMessage> {
    const response = await graphRequest<IMessage>(root, params, ctx, resolveInfo);
    this.pubsub.publish('CREATE_MESSAGE', response);
    return response;
  }

  @Type(new GraphQLList(Message))
  @Query({
    messageId: {
      type: GraphQLString
    },
    channelId: {
      type: GraphQLString
    }
  })
  Messages(root, params, ctx: GraphQLContext, resolveInfo): Promise<IMessage[]> {
    return graphRequest<IMessage[]>(root, params, ctx, resolveInfo);
  }

  @Type(Message)
  @Query({
    messageId: {
      type: GraphQLString
    },
    channelId: {
      type: GraphQLString
    }
  })
  Message(root, params, ctx: GraphQLContext, resolveInfo): Promise<IMessage> {
    return graphRequest<IMessage>(root, params, ctx, resolveInfo);
  }


  @Type(Message)
  @Subscribe((self: AppQueriesController) => self.pubsub.asyncIterator('CREATE_MESSAGE'))
  @Subscription()
  subscribeToUserMessagesBasic(message: IMessage): IMessage {
      return message;
  }


  @Type(Message)
  @Subscribe(
      withFilter(
          (self: AppQueriesController) => self.pubsub.asyncIterator('CREATE_MESSAGE_WITH_FILTER'),
          (payload, {id}, context: GraphQLContext) => {
              console.log('Subscribed User: ', id, context);
              return true;
          }
      )
  )
  @Subscription({
      id: {
          type: new GraphQLNonNull(GraphQLInt)
      }
  })
  subscribeToUserMessagesWithFilter(message: IMessage): IMessage {
      return message;
  }

}
