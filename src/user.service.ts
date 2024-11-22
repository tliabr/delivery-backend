import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import { Cat, User } from './models/user';
@Injectable()
export class UserService {
  private users: User[] = [];
  constructor() {
    this.loadData();
  }
  private loadData() {
    const filePath = join(__dirname, '..', 'data.json');
    const fileContent = readFileSync(filePath, 'utf-8');
    this.users = JSON.parse(fileContent);
    console.log(this.users);
  }
  getUser(id: string): User | null {
    const user = this.users.find((u) => u.id === id);
    return user || null;
  }
  getUserCats(id: string): Cat[] {
    const user = this.getUser(id);
    if (user) {
      return user.cats;
    }
    return [];
  }
}
