import { GraphQLEnumType } from "graphql";

export const ChannelTypeEnum = new GraphQLEnumType({
  name: "ChannelType",
  values: {
    PRIVATE: {
      value: "PRIVATE"
    },
    PUBLIC: {
      value: "PUBLIC"
    },
    GROUP: {
      value: "GROUP"
    }
  }
});
