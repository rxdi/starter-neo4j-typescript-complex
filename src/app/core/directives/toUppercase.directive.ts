import { GraphQLCustomDirective } from "@gapi/core";
import { DirectiveLocation } from "graphql";

export const ToUpperCaseDirective = new GraphQLCustomDirective<string>({
  name: "toUpperCase",
  description: "change the case of a string to uppercase",
  locations: [DirectiveLocation.FIELD],
  resolve: async resolve => (await resolve()).toUpperCase()
});
