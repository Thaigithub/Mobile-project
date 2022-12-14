import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { HomeReceiptService } from './homereceipt.service';
import { HomerentService } from './homerent.service';
import { HomeRequestService } from './homeRequest.service';
import { HomeReceipt, IHomeReceipt } from './schema/homereceipt.schema';
import { HomeRent, IHomeRent } from './schema/homerent.schema';
import { HomeRequest, IHomeRequest } from './schema/homeRequest.schema';

@Controller('homerent')
export class HomerentController {
  constructor(
    private readonly homerentService: HomerentService,
    private readonly homeRequestService: HomeRequestService,
    private readonly homeReceiptService: HomeReceiptService,
  ) {}

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

  @Get('homerequest/owner/:id')
  async getHomeRequestByOwnerId(
    @Param('id') id: string,
  ): Promise<HomeRequest[]> {
    return this.homeRequestService.getHomeRequestsByOwnerId(id);
  }

  @Get('homerequest/renter/:id')
  async getHomeRequestByRenterId(
    @Param('id') id: string,
  ): Promise<HomeRequest[]> {
    return this.homeRequestService.getHomeRequestsByRenterId(id);
  }

  @Get('homerequest/homeId/:id')
  async getHomeRequestById(@Param('id') id: string): Promise<HomeRequest[]> {
    return this.homeRequestService.getHomeRequestsById(id);
  }

  @Post('homerequest')
  async saveHomeRequest(@Body() data: IHomeRequest): Promise<HomeRequest> {
    return this.homeRequestService.saveHomeRequest(data);
  }

  @Post('homerequest/:id/:action')
  async updateHomeRequest(
    @Param('id') id: string,
    @Param('action') action: string,
  ): Promise<HomeRequest> {
    return this.homeRequestService.updateHomeRequest(id, action);
  }

  @Get('homereceipt/renter/:id')
  async getHomeReceiptByRenterId(
    @Param('id') id: string,
  ): Promise<HomeReceipt[]> {
    return this.homeReceiptService.getHomeReceiptsByRenterId(id);
  }

  @Get('homereceipt/homeId/:id')
  async getHomeReceiptById(@Param('id') id: string): Promise<HomeReceipt[]> {
    return this.homeReceiptService.getHomeReceiptsById(id);
  }

  @Get('homereceipt/owner/:id')
  async getHomeReceiptByOwnerId(
    @Param('id') id: string,
  ): Promise<HomeReceipt[]> {
    return this.homeReceiptService.getHomeReceiptsByOwnerId(id);
  }

  @Post('homerequest')
  async saveHomeReceipt(@Body() data: IHomeReceipt): Promise<HomeReceipt> {
    return this.homeReceiptService.saveHomeReceipt(data);
  }
}
