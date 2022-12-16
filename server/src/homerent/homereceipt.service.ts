import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HomeReceipt, IHomeReceipt } from './schema/homereceipt.schema';
import { HomeRequest, IHomeRequest } from './schema/homeRequest.schema';

@Injectable()
export class HomeReceiptService {
  constructor(
    @InjectModel('homereceipts')
    private readonly homeReceiptModel: Model<HomeReceipt>,
  ) {}

  async saveHomeReceipt(data: IHomeReceipt): Promise<HomeReceipt> {
    return await new this.homeReceiptModel(data).save();
  }

  async getHomeReceiptsByOwnerId(id: string): Promise<HomeReceipt[]> {
    return await this.homeReceiptModel.find({ ownerId: id });
  }

  async getHomeReceiptsByRenterId(id: string): Promise<HomeReceipt[]> {
    return await this.homeReceiptModel.find({ renterId: id });
  }

  async getHomeReceiptsById(id: string): Promise<HomeReceipt[]> {
    return await this.homeReceiptModel.find({ homeId: id });
  }

  async updateHomeReceiptStatus(
    id: string,
    status: string,
  ): Promise<HomeReceipt> {
    return await this.homeReceiptModel.findOneAndUpdate(
      { homeId: id },
      { $set: { status } },
    );
  }
}
