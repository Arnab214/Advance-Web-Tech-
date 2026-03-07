import { IsNotEmpty,IsString,Matches,IsDateString,IsUrl,IsEmail,MinLength,IsIn} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateSellerDTO {
  @IsNotEmpty({ message: 'Email Address field is required' })
  @IsEmail({}, { message: 'Invalid email format' })
  @Matches(/@aiub\.edu$/, { message: 'Email must contain aiub.edu domain' })
  email: string;

  @IsNotEmpty({ message: 'Password field is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @Matches(/[A-Z]/, { message: 'Password must contain at least one uppercase character' })
  password: string;

  @IsNotEmpty({ message: 'Gender field is required' })
  @IsIn(['male', 'female'], { message: 'Gender must be either male or female' })
  gender: string;

  @IsNotEmpty({ message: 'Phone Number field is required' })
  @Matches(/^[0-9]+$/, { message: 'Phone Number must contain only numbers' })
  phoneNumber: string;
}
export class CreateCustomerDTO {
  @IsNotEmpty({ message: 'Email Address field is required' })
  @IsEmail({}, { message: 'Invalid email format' })
  @Matches(/@aiub\.edu$/, { message: 'Email must contain aiub.edu domain' })
  email: string;

  @IsNotEmpty({ message: 'Password field is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @Matches(/[A-Z]/, { message: 'Password must contain at least one uppercase character' })
  password: string;

  @IsNotEmpty({ message: 'Gender field is required' })
  @IsIn(['male', 'female'], { message: 'Gender must be either male or female' })
  gender: string;

  @IsNotEmpty({ message: 'Phone Number field is required' })
  @Matches(/^[0-9]+$/, { message: 'Phone Number must contain only numbers' })
  phoneNumber: string;
}

export class CreateManagerDTO {
  name: string;
  password: string;
}

export class UpdateCustomerDTO extends PartialType(CreateCustomerDTO) {}
export class UpdateSellerDTO extends PartialType(CreateSellerDTO) {}
export class UpdateManagerDTO extends PartialType(CreateManagerDTO) {}

