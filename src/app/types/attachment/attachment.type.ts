import { GraphQLObjectType, GraphQLString } from "graphql";

export const AttachmentType = new GraphQLObjectType({
  name: "Attachment",
  fields: () => ({
    source: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    downloadFileName: {
      type: GraphQLString
    },
    mimeType: {
      type: GraphQLString
    },
    thumbnail: {
      type: GraphQLString
    }
  })
});
