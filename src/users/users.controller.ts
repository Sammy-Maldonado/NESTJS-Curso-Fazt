import { Body, Controller, Get, Post} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @Get('/users')  // Definimos la ruta para obtener los usuarios
    getUsers() {
    return this.usersService.getUsers();  // Llamamos al servicio de usuarios para obtener los usuarios y retornalo al cliente
    }

  @Post('/users')
    createUser(@Body() user:CreateUserDTO) {
      return this.usersService.createUser(user)
    }
  }

