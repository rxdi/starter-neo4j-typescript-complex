import { GraphQLEnumType } from "graphql";

export const MessageEnumType = new GraphQLEnumType({
  name: "MessageEnumType",
  values: {
    CHAT_PRIVATE: {
      value: "CHAT_PRIVATE"
    },
    CHAT_PUBLIC: {
      value: "CHAT_PUBLIC"
    },
    USER_JOIN: {
      value: "USER_JOIN"
    },
    USER_LEAVE: {
      value: "USER_LEAVE"
    },
    DEL_MESSAGE: {
      value: "DEL_MESSAGE"
    }
  }
});
