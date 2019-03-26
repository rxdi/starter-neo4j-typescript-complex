import { Controller, Type, Query } from "@gapi/core";
import { GraphQLContext } from "./app.type";
import { neo4jgraphql } from 'neo4j-graphql-js';
import { UserContext } from "./types/user/user-context.type";

@Controller()
export class AppQueriesController {

    @Type(UserContext)
    @Query()
    findUser(root, params, ctx: GraphQLContext, resolveInfo) {
        return neo4jgraphql(root, params, ctx, resolveInfo);
    }

}


