import { Test, TestingModule } from '@nestjs/testing';
import { CommsController } from './comms.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: CommsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CommsController],
      providers: [AppService],
    }).compile();

    appController = app.get<CommsController>(CommsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
