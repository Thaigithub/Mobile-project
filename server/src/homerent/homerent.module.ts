import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HomeReceiptService } from './homereceipt.service';
import { HomerentController } from './homerent.controller';
import { HomerentService } from './homerent.service';
import { HomeRequestService } from './homeRequest.service';
import { HomeReceiptSchema } from './schema/homereceipt.schema';
import { HomeRentSchema } from './schema/homerent.schema';
import { HomeRequestSchema } from './schema/homeRequest.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'homerents',
        schema: HomeRentSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: 'homerequests',
        schema: HomeRequestSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: 'homereceipts',
        schema: HomeReceiptSchema,
      },
    ]),
  ],
  controllers: [HomerentController],
  providers: [HomerentService, HomeRequestService, HomeReceiptService],
  exports: [HomerentService, HomeRequestService, HomeReceiptService],
})
export class HomerentModule {}
