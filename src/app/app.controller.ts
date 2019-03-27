import { Controller, Type, Mutation, GraphQLString, Query } from "@gapi/core";
import { neo4jgraphql } from "neo4j-graphql-js";
import { UserContext } from "./types/user/user-context.type";
import { Message } from "./types/message/message.type";
import { GraphQLContext } from "./app.context";

@Controller()
export class AppQueriesController {
  @Type(UserContext)
  @Query()
  UserContext(root, params, ctx: GraphQLContext, resolveInfo) {
    return neo4jgraphql(root, params, ctx, resolveInfo);
  }

  @Type(Message)
  @Mutation({
    messageId: {
      type: GraphQLString
    },
    channelId: {
      type: GraphQLString
    }
  })
  CreateMessage(root, params, ctx: GraphQLContext, resolveInfo) {
    return neo4jgraphql(root, params, ctx, resolveInfo);
  }
}
