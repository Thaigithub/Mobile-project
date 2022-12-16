import { Document, Schema, SchemaTypes } from 'mongoose';

export const HomeRequestSchema = new Schema({
  homeId: { type: String },
  ownerId: { type: String },
  renterId: { type: String },
  status: { type: String },
  numOfMonth: { type: Number },
  numOfPeople: { type: Number },
  dateIn: { type: String },
});

export interface IHomeRequest {
  homeId: string;
  ownerId: string;
  renterId: string;
  status: string;
  numOfMonth: number;
  numOfPeople: number;
  dateIn: string;
}

export type HomeRequest = IHomeRequest & Document;
