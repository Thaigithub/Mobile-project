import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HomeRequest, IHomeRequest } from './schema/homeRequest.schema';

@Injectable()
export class HomeRequestService {
  constructor(
    @InjectModel('homerequests')
    private readonly homeRequestModel: Model<HomeRequest>,
  ) {}

  async saveHomeRequest(data: IHomeRequest): Promise<HomeRequest> {
    return await new this.homeRequestModel(data).save();
  }

  async getHomeRequestsByOwnerId(id: string): Promise<HomeRequest[]> {
    return await this.homeRequestModel.find({ ownerId: id });
  }

  async getHomeRequestsByRenterId(id: string): Promise<HomeRequest[]> {
    return await this.homeRequestModel.find({ renterId: id });
  }

  async getHomeRequestsById(id: string): Promise<HomeRequest[]> {
    return await this.homeRequestModel.find({ homeId: id });
  }

  async updateHomeRequest(id: string, action: string): Promise<HomeRequest> {
    switch (action) {
      case 'approve':
        return await this.homeRequestModel.findOneAndUpdate(
          { homeId: id },
          { $set: { status: 'APPROVED' } },
        );
      case 'reject':
        return await this.homeRequestModel.findOneAndUpdate(
          { homeId: id },
          { $set: { status: 'REJECTED' } },
        );
      case 'cancel':
        return await this.homeRequestModel.findOneAndUpdate(
          { homeId: id },
          { $set: { status: 'cancelled' } },
        );
    }
  }
}
