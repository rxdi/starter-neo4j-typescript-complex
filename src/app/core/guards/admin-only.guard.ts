import { Service } from "@rxdi/core";
import { CanActivateResolver, GenericGapiResolversType } from "@gapi/core";
import { GraphQLContext } from "../../app.context";

@Service()
export class AdminOnly implements CanActivateResolver {
  canActivate(
    context: GraphQLContext,
    payload,
    descriptor: GenericGapiResolversType
  ) {
    return false;
  }
}
