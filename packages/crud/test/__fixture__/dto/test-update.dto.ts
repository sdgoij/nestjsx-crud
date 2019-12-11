import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class TestUpdateDto {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsEmail({ require_tld: false })
  email?: string;

  @IsOptional()
  @IsNumber()
  age?: number;
}
