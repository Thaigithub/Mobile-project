import { Document, Schema, SchemaTypes } from 'mongoose';

export const HomeRentSchema = new Schema({
  name: { type: String },
  imageUrl: { type: String },
  price: { type: Number },
  rating: { type: Number },
  status: { type: String },
  note: { type: String },
  contact: { type: String },
  roomType: { type: String },
  roomService: { type: [String] },
  address: {
    street: { type: String },
    dictrict: { type: String },
    city: { type: String },
  },
  details: {
    area: { type: Number },
    numOfRooms: { type: Number },
    roomCapacity: { type: Number },
    isPrivateWc: { type: Boolean },
    waterUnitPrice: { type: Number },
    bikeUnitPrice: { type: Number },
    electricUnitPrice: { type: Number },
    wifiPrice: { type: Number },
  },
});

export interface IHomeRent {
  _id?: string;
  name: string;
  imageUrl: string;
  price: number;
  rating: number;
  status: string;
  note: string;
  contact: string;
  roomType: string;
  roomService: string[];
  address: {
    street: string;
    dictrict: string;
    city: string;
  };
  details: {
    area: number;
    numOfRooms: number;
    roomCapacity: number;
    isPrivateWc: boolean;
    waterUnitPrice: number;
    bikeUnitPrice: number;
    electricUnitPrice: number;
    wifiPrice: number;
  };
}

export type HomeRent = IHomeRent & Document;
