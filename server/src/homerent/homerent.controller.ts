import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { HomerentService } from './homerent.service';
import { HomeRent, IHomeRent } from './schema/homerent.schema';

@Controller('homerent')
export class HomerentController {
  constructor(private readonly homerentService: HomerentService) {}

  @Get()
  async getHomerentList(): Promise<HomeRent[]> {
    return await this.homerentService.getHomerentList();
  }

  @Get(':id')
  async getHomerentById(@Param('id') id: string): Promise<HomeRent> {
    return await this.homerentService.getHomerentById(id);
  }

  @Post('upsertHomerent')
  async method(@Body() homerent: IHomeRent): Promise<HomeRent> {
    const homerentrRecord = await this.homerentService.upsertHomeRent(homerent);
    return homerentrRecord;
  }
}
