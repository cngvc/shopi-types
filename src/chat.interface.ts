import { ObjectId } from 'mongoose';

type ConversationType =
  | ObjectId
  | string
  | string[]
  | ILastMessage
  | Date
  | undefined;

export type ILastMessage = {
  messageId?: string;
  senderId?: string;
  body?: string;
  createdAt?: Date | string;
};

export interface IConversationDocument
  extends Record<string, ConversationType> {
  _id: ObjectId | string;
  conversationId: string;
  participants: string[];
  lastMessage?: ILastMessage;
  updatedAt?: Date | string;
  [key: string]: ConversationType;
}

type MessageType = ObjectId | string | boolean | Date | undefined;

export interface IMessageDocument extends Record<string, MessageType> {
  _id?: ObjectId | string;
  conversationId?: string;
  body?: string;
  senderId?: string;
  receiverId?: string;
  isRead?: boolean;
  createdAt?: Date | string;
  [key: string]: MessageType;
}
