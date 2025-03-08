import mongoose, { ObjectId } from 'mongoose';

export interface IConversationDocument {
  _id: mongoose.Types.ObjectId | string;
  conversationId: string;
  participants: string[];
  lastMessage?: {
    messageId?: string;
    senderId?: string;
    body?: string;
    createdAt?: Date | string;
  };
  updatedAt?: Date | string;
  [key: string]: string | {} | undefined;
}

export interface IMessageDocument {
  _id?: string | ObjectId;
  conversationId?: string;
  body?: string;
  senderId?: string;
  receiverId?: string;
  isRead?: boolean;
  createdAt?: Date | string;
  [key: string]: string | {} | undefined;
}
