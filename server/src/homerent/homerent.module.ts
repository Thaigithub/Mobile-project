import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HomerentController } from './homerent.controller';
import { HomerentService } from './homerent.service';
import { HomeRentSchema } from './schema/homerent.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'homerents',
        schema: HomeRentSchema,
      },
    ]),
  ],
  controllers: [HomerentController],
  providers: [HomerentService],
  exports: [HomerentService],
})
export class HomerentModule {}
