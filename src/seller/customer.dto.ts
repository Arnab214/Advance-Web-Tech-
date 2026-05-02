import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateCustomerDTO {

  @IsString()
  name: string;

  @IsEmail()
  email: string;
}

export class UpdateCustomerDTO {

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsEmail()
  email: string;
}