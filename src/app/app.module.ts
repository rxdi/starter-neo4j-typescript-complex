import { Module, CoreModule } from "@gapi/core";
import { UserContext } from "./types/user/user-context.type";
import { User } from "./types/user/user.type";
import { Message } from "./types/message/message.type";
import { Channel } from "./types/channel/channel.type";
import { AttachmentType } from "./types/attachment/attachment.type";
import { VoyagerModule } from "@gapi/voyager";
import { Neo4JModule } from "@rxdi/neo4j";
import { ToUpperCaseDirective } from "./core/directives/toUppercase.directive";
import { AppQueriesController } from "./app.controller";
// import { MessagesEffect } from "./core/effects/messages.effect";

@Module({
  controllers: [AppQueriesController],
  imports: [
    CoreModule.forRoot({
      graphql: {
        directives: [ToUpperCaseDirective],
        graphiql: true,
        graphiQlPlayground: false,
        writeEffects: true
      },
    }),
    Neo4JModule.forRoot({
      types: [UserContext, User, Message, Channel, AttachmentType],
      graphName: "neo4j",
      graphAddress: "bolt://localhost:7687",
      password: "98412218",
      excludedTypes: {
        query: {
          exclude: ['Subscription']
        },
        mutation: {
          exclude: ['Subscription', UserContext.name]
        }
      }
    }),
    VoyagerModule.forRoot({
      endpointUrl: "/graphql",
      path: "/voyager"
    })
  ],
  // effects: [MessagesEffect]
})
export class AppModule {}
