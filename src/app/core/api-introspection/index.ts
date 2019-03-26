// tslint:disable
// graphql typescript definitions


  export interface IGraphQLResponseRoot {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
  }

  export interface IGraphQLResponseError {
    message: string;            // Required for all errors
    locations?: Array<IGraphQLResponseErrorLocation>;
    [propName: string]: any;    // 7.2.2 says 'GraphQL servers may provide additional entries to error'
  }

  export interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  /**
    description: Query type for all get requests which will not change persistent data
  */
  export interface IQuery {
    __typename?: "Query";
    status: IStatusQueryType | null;
    findUser: IUserContext | null;
    Attachment: Array<IAttachment> | null;
    Channel: Array<IChannel> | null;
    Message: Array<IMessage> | null;
    StatusQueryType: Array<IStatusQueryType> | null;
    User: Array<IUser> | null;
    UserContext: Array<IUserContext> | null;
}

  
  export interface IStatusQueryType {
    __typename?: "StatusQueryType";
    status: string | null;
    _id: string | null;
}

  
  export interface IUserContext {
    __typename?: "UserContext";
    user: IUser | null;
    channels: Array<IChannel> | null;
    blockedUsers: Array<string> | null;
    _id: string | null;
}

  
  export interface IUser {
    __typename?: "User";
    userName: string | null;
    userId: string | null;
    externalId: string | null;
    activeChannel: string | null;
    _id: string | null;
}

  
  export interface IChannel {
    __typename?: "Channel";
    channelId: Array<string> | null;
    channelName: Array<string> | null;
    subscribers: Array<string> | null;
    messages: Array<IMessage> | null;
    channelType: IChannelTypeEnum | null;
    _id: string | null;
}

  
  export interface IMessage {
    __typename?: "Message";
    messageId: string | null;
    content: string | null;
    attachment: IAttachment | null;
    senderName: string | null;
    date: string | null;
    channelId: string | null;
    messageType: IMessageEnumTypeEnum | null;
    timestamp: number | null;
    endOfLifeTimestamp: number | null;
    seen: boolean | null;
    own: boolean | null;
    important: boolean | null;
    loading: boolean | null;
    profileImage: string | null;
    _id: string | null;
}

  
  export interface IAttachment {
    __typename?: "Attachment";
    source: string | null;
    name: string | null;
    downloadFileName: string | null;
    mimeType: string | null;
    thumbnail: string | null;
    _id: string | null;
}

export   
  type IMessageEnumTypeEnum = 'CHAT_PRIVATE' | 'CHAT_PUBLIC' | 'USER_JOIN' | 'USER_LEAVE' | 'DEL_MESSAGE';

export   
  type IChannelTypeEnum = 'PRIVATE' | 'PUBLIC' | 'GROUP';

export   
  type IAttachmentOrderingEnum = 'source_asc' | 'source_desc' | 'name_asc' | 'name_desc' | 'downloadFileName_asc' | 'downloadFileName_desc' | 'mimeType_asc' | 'mimeType_desc' | 'thumbnail_asc' | 'thumbnail_desc' | '_id_asc' | '_id_desc';

export   
  type IChannelOrderingEnum = 'channelType_asc' | 'channelType_desc' | '_id_asc' | '_id_desc';

export   
  type IMessageOrderingEnum = 'messageId_asc' | 'messageId_desc' | 'content_asc' | 'content_desc' | 'senderName_asc' | 'senderName_desc' | 'date_asc' | 'date_desc' | 'channelId_asc' | 'channelId_desc' | 'messageType_asc' | 'messageType_desc' | 'timestamp_asc' | 'timestamp_desc' | 'endOfLifeTimestamp_asc' | 'endOfLifeTimestamp_desc' | 'seen_asc' | 'seen_desc' | 'own_asc' | 'own_desc' | 'important_asc' | 'important_desc' | 'loading_asc' | 'loading_desc' | 'profileImage_asc' | 'profileImage_desc' | '_id_asc' | '_id_desc';

export   
  type IStatusQueryTypeOrderingEnum = 'status_asc' | 'status_desc' | '_id_asc' | '_id_desc';

export   
  type IUserOrderingEnum = 'userName_asc' | 'userName_desc' | 'userId_asc' | 'userId_desc' | 'externalId_asc' | 'externalId_desc' | 'activeChannel_asc' | 'activeChannel_desc' | '_id_asc' | '_id_desc';

export   
  type IUserContextOrderingEnum = '_id_asc' | '_id_desc';

  
  export interface IMutation {
    __typename?: "Mutation";
    CreateAttachment: IAttachment | null;
    UpdateAttachment: IAttachment | null;
    DeleteAttachment: IAttachment | null;
    CreateChannel: IChannel | null;
    UpdateChannel: IChannel | null;
    DeleteChannel: IChannel | null;
    CreateMessage: IMessage | null;
    UpdateMessage: IMessage | null;
    DeleteMessage: IMessage | null;
    CreateStatusQueryType: IStatusQueryType | null;
    DeleteStatusQueryType: IStatusQueryType | null;
    CreateUser: IUser | null;
    UpdateUser: IUser | null;
    DeleteUser: IUser | null;
}

  
  export interface INeo4jTime {
    __typename?: "_Neo4jTime";
    hour: number | null;
    minute: number | null;
    second: number | null;
    millisecond: number | null;
    microsecond: number | null;
    nanosecond: number | null;
    timezone: string | null;
    formatted: string | null;
}

  
  export interface INeo4jTimeInput {
    hour?: number | null;
    minute?: number | null;
    second?: number | null;
    nanosecond?: number | null;
    millisecond?: number | null;
    microsecond?: number | null;
    timezone?: string | null;
    formatted?: string | null;
}

  
  export interface INeo4jDate {
    __typename?: "_Neo4jDate";
    year: number | null;
    month: number | null;
    day: number | null;
    formatted: string | null;
}

  
  export interface INeo4jDateInput {
    year?: number | null;
    month?: number | null;
    day?: number | null;
    formatted?: string | null;
}

  
  export interface INeo4jDateTime {
    __typename?: "_Neo4jDateTime";
    year: number | null;
    month: number | null;
    day: number | null;
    hour: number | null;
    minute: number | null;
    second: number | null;
    millisecond: number | null;
    microsecond: number | null;
    nanosecond: number | null;
    timezone: string | null;
    formatted: string | null;
}

  
  export interface INeo4jDateTimeInput {
    year?: number | null;
    month?: number | null;
    day?: number | null;
    hour?: number | null;
    minute?: number | null;
    second?: number | null;
    millisecond?: number | null;
    microsecond?: number | null;
    nanosecond?: number | null;
    timezone?: string | null;
    formatted?: string | null;
}

  
  export interface INeo4jLocalTime {
    __typename?: "_Neo4jLocalTime";
    hour: number | null;
    minute: number | null;
    second: number | null;
    millisecond: number | null;
    microsecond: number | null;
    nanosecond: number | null;
    formatted: string | null;
}

  
  export interface INeo4jLocalTimeInput {
    hour?: number | null;
    minute?: number | null;
    second?: number | null;
    millisecond?: number | null;
    microsecond?: number | null;
    nanosecond?: number | null;
    formatted?: string | null;
}

  
  export interface INeo4jLocalDateTime {
    __typename?: "_Neo4jLocalDateTime";
    year: number | null;
    month: number | null;
    day: number | null;
    hour: number | null;
    minute: number | null;
    second: number | null;
    millisecond: number | null;
    microsecond: number | null;
    nanosecond: number | null;
    formatted: string | null;
}

  
  export interface INeo4jLocalDateTimeInput {
    year?: number | null;
    month?: number | null;
    day?: number | null;
    hour?: number | null;
    minute?: number | null;
    second?: number | null;
    millisecond?: number | null;
    microsecond?: number | null;
    nanosecond?: number | null;
    formatted?: string | null;
}

  
  export interface IAttachmentInput {
    source: string;
}

  
  export interface IChannelInput {
    channelId: string;
}

  
  export interface IMessageInput {
    messageId: string;
}

  
  export interface IStatusQueryTypeInput {
    status: string;
}

  
  export interface IUserInput {
    userName: string;
}

export   
  type IRelationDirectionsEnum = 'IN' | 'OUT';


// tslint:enable
