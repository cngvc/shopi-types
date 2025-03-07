import mongoose, { ObjectId } from 'mongoose';

export interface IConversationDocument {
  _id: mongoose.Types.ObjectId | string;
  conversationId: string;
  participants: string[];
}

export interface IMessageDocument {
  _id?: string | ObjectId;
  conversationId?: string;
  body?: string;
  senderId?: string;
  receiverId?: string;
  isRead?: boolean;
  createdAt?: Date | string;
}
