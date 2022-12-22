import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HomeRent, IHomeRent } from './schema/homerent.schema';

@Injectable()
export class HomerentService {
  constructor(
    @InjectModel('homerents')
    private readonly homerentModel: Model<HomeRent>,
  ) {}

  async upsertHomeRent(homeRent: IHomeRent): Promise<HomeRent> {
    const { _id, ...data } = homeRent;
    let homeRentRecord: HomeRent;
    if (_id) {
      homeRentRecord = await this.homerentModel.findOneAndUpdate(
        { _id },
        { ...data },
        { new: true, upsert: true },
      );
    } else {
      homeRentRecord = await new this.homerentModel(data).save();
    }
    return homeRentRecord;
  }

  async getHomerentList(): Promise<HomeRent[]> {
    return await this.homerentModel.find({});
  }

  async getHomerentById(id: string): Promise<HomeRent> {
    return await this.homerentModel.findById({ _id: id });
  }
}
