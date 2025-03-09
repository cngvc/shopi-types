type ConversationType = string | string[] | ILastMessage | Date | undefined;

export type ILastMessage = {
  messagePublicId: string;
  senderAuthId: string;
  body: string;
  createdAt?: Date | string;
};

export interface IConversationDocument
  extends Record<string, ConversationType> {
  conversationPublicId?: string;
  participants: string[];
  lastMessage?: ILastMessage;
  updatedAt?: Date | string;
  [key: string]: ConversationType;
}

type MessageType = string | boolean | Date | undefined;

export interface IMessageDocument extends Record<string, MessageType> {
  messagePublicId?: string;
  conversationPublicId: string;
  senderAuthId: string;
  receiverAuthId: string;
  isRead?: boolean;
  body: string;
  createdAt?: Date | string;
  [key: string]: MessageType;
}
