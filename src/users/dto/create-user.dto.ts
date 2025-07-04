import { IsEmail, IsNotEmpty, IsNumber, IsString, Max} from 'class-validator'

export class CreateUserDTO {

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Max(100)
  age: number;
}