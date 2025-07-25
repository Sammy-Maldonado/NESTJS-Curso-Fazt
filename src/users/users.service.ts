import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersService {

  // La propiedad es private, significa que solo puede ser accedida dentro de esta clase
  private users: any[] = [
    {
      id: 1,
      name: 'John Doe',
      phone: '123-456-7890', 
    },
    {
      id: 2,
      name: 'Jane Smith',
      phone: '987-654-3210',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      phone: '555-555-5555',
    },
    {
      id: 4,
      name: 'Bob Brown',
      phone: '444-444-4444',
    }
  ]

  getUsers() {
    return this.users;
  }

  createUser(user: CreateUserDTO) {
    this.users.push(user);
    
    return {
      ...user,
      id: this.users.length + 1
    };
  }
}
