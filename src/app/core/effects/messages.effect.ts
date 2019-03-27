import { Effect, OfType, PubSubService } from "@gapi/core";
import { EffectTypes } from "../api-introspection/EffectTypes";
import { GraphQLContext } from "../../app.context";
import { IMessage } from "../api-introspection";

@Effect()
export class MessagesEffect {
  constructor(
      private pubsub: PubSubService
  ) {}

  @OfType(EffectTypes.CreateMessage)
  createMessageEffect(result: IMessage, args, context: GraphQLContext) {
    this.pubsub.publish('CREATE_MESSAGE', result);
    // this will be triggered when CreateMessage effect is executed
    console.log(result, args, context);
  }
}
