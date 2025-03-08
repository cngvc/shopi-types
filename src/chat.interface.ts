import mongoose from 'mongoose';

type ConversationType =
  | mongoose.Types.ObjectId
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
  _id: mongoose.Types.ObjectId | string;
  conversationId: string;
  participants: string[];
  lastMessage?: ILastMessage;
  updatedAt?: Date | string;
  [key: string]: ConversationType;
}

type MessageType =
  | mongoose.Types.ObjectId
  | string
  | boolean
  | ILastMessage
  | Date
  | undefined;

export interface IMessageDocument extends Record<string, MessageType> {
  _id?: mongoose.Types.ObjectId | string;
  conversationId?: string;
  body?: string;
  senderId?: string;
  receiverId?: string;
  isRead?: boolean;
  createdAt?: Date | string;
  [key: string]: MessageType;
}
