import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {

  constructor(private usersService: UsersService) {}

  @Get('/users')  // Definimos la ruta para obtener los usuarios
    getUsers() {
    return this.usersService.getUsers();  // Llamamos al servicio de usuarios para obtener los usuarios y retornalo al cliente
    }
  }

