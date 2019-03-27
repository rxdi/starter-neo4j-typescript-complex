import { Module } from "@gapi/core";
import { VoyagerModule } from "@gapi/voyager";
import { UserContext } from "./types/user/user-context.type";
import { Neo4JModule } from "@rxdi/neo4j";
import { User } from "./types/user/user.type";
import { Message } from "./types/message/message.type";
import { Channel } from "./types/channel/channel.type";
import { AttachmentType } from "./types/attachment/attachment.type";
// import { AppQueriesController } from "./app.controller";
// Uncomment to override some methods which are provided from neo4js

@Module({
  // controllers: [AppQueriesController],
  imports: [
    Neo4JModule.forRoot({
      types: [UserContext, User, Message, Channel, AttachmentType],
      graphName: "neo4j",
      graphAddress: "bolt://localhost:7687",
      password: "98412218",
      excludedTypes: {
        mutation: {
          exclude: [UserContext.name]
        }
      }
    }),
    VoyagerModule.forRoot({
      endpointUrl: "/graphql",
      path: "/voyager"
    })
  ]
})
export class AppModule {}
