import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Service } from "@rxdi/core";
import { InterceptResolver, GenericGapiResolversType } from "@gapi/core";
import { GraphQLContext } from "../../app.context";

@Service()
export class LoggerInterceptor implements InterceptResolver {
  intercept(
    chainable$: Observable<any>,
    context: GraphQLContext,
    payload,
    descriptor: GenericGapiResolversType
  ) {
    console.log("Before...");
    const now = Date.now();
    return chainable$.pipe(
      tap(() => console.log(`After... ${Date.now() - now}ms`))
    );
  }
}
