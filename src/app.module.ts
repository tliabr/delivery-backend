import { Module } from '@nestjs/common';
import { CommsController } from './comms.controller';
import { AppService } from './app.service';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [CommsController],
  providers: [AppService, UserService],
})
export class AppModule {}
