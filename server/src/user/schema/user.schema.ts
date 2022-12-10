import { Document, Schema, SchemaTypes } from 'mongoose';

export const UserSchema = new Schema({
  username: { type: String },
  password: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  phoneNumber: { type: String },
  address: { type: String },
  role: { type: String },
});

export interface IUser {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  role: string;
}

export type User = IUser & Document;
