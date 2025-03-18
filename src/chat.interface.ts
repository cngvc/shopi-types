export interface IConversationParticipant {
  authId: string;
  username: string;
}

export interface ILastMessage {
  messagePublicId: string;
  senderAuthId: string;
  body: string;
  createdAt?: Date | string;
}

export interface IConversationDocument {
  conversationPublicId?: string;
  participants: IConversationParticipant[];
  lastMessage?: ILastMessage;
  updatedAt?: Date | string;
}

export interface IMessageDocument {
  messagePublicId?: string;
  conversationPublicId: string;
  senderAuthId: string;
  receiverAuthId: string;
  isRead?: boolean;
  body: string;
  createdAt?: Date | string;
}
