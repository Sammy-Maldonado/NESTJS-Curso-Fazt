import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) {}

  getUsers() {
    return this.prisma.user.findMany();
  }

  createUser(user: CreateUserDTO) {
    return this.prisma.user.create({ data: user, });
  }
}
