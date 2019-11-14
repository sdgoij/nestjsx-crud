import { IsEmail, IsNumber, IsString } from 'class-validator';

export class TestCreateDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail({ require_tld: false })
  email: string;

  @IsNumber()
  age: number;
}
