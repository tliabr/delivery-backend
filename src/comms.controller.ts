import { Controller, Get, Param } from '@nestjs/common';
import { UserContent } from './models/user-content';
import { UserService } from './user.service';
import { calculateTotalPouchesPrice, formatCatNames } from './utils';
import { Cat } from './models/user';

@Controller('comms')
export class CommsController {
  constructor(private readonly userService: UserService) {}

  @Get('welcome-fresh/:id')
  getWelcomeMessage(@Param('id') id: string): { message: string } {
    const user = this.userService.getUser(id);
    if (!user) {
      return { message: 'User not found' };
    }
    const catsString = formatCatNames(user?.cats.map((c) => c.name) || []);
    return {
      message: `Welcome to KatKin, ${user.firstName} ${user.lastName}! We're super excited for ${catsString} to join the KatKin club and start loving fresh!`,
    };
  }
  @Get('your-next-delivery/:id')
  getDeliveryData(@Param('id') id: string): UserContent | null {
    // assumption: every user has at least one cat
    const user = this.userService.getUser(id);
    if (!user) {
      return null;
    }
    const catsString = formatCatNames(user?.cats.map((c) => c.name) || []);
    const totalPrice = this.getTotalPrice(user.cats);
    return {
      title: `Your next delivery for ${catsString}`,
      message: `Hey ${user.firstName}! In two days' time, we'll be charging you for your next order for ${catsString}'s fresh food.`,
      totalPrice,
      freeGift: totalPrice > 120,
    };
  }
  private getTotalPrice(cats: Cat[] = []): number {
    const catsWithSubscription = cats.filter((c) => c.subscriptionActive);
    const pouches = catsWithSubscription.map((c) => c.pouchSize);
    return calculateTotalPouchesPrice(pouches);
  }
}
