import { Document, Schema, SchemaTypes } from 'mongoose';

export const HomeReceiptSchema = new Schema({
  homeId: { type: String },
  ownerId: { type: String },
  renterId: { type: String },
  type: { type: String },
  deadLine: { type: String },
  status: { type: String },
  totalAmount: { type: Number },
  qty: { type: Number },
  unit: { type: String },
});

export interface IHomeReceipt {
  homeId: string;
  ownerId: string;
  renterId: string;
  type: string;
  deadLine: string;
  status: string;
  totalAmount: number;
  qty: number;
  unit: string;
}

export type HomeReceipt = IHomeReceipt & Document;
