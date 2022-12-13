import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HomerentController } from './homerent.controller';
import { HomerentService } from './homerent.service';
import { HomeRequestService } from './homeRequest.service';
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
  ],
  controllers: [HomerentController],
  providers: [HomerentService, HomeRequestService],
  exports: [HomerentService, HomeRequestService],
})
export class HomerentModule {}
