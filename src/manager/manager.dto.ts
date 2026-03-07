import { IsNotEmpty,IsString,Matches,IsDateString,IsUrl} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateSellerDTO {
  @IsString({ message: 'Require String here' })
  @IsNotEmpty({ message: 'Name field cannot be empty' })
  @Matches(/^[^0-9]*$/, { message: 'Name should not contain any numbers' })
  name: string;

  @IsNotEmpty({ message: 'Password field cannot be empty' })
  @Matches(/[#@$&]/, {
    message:
      'Password must contain at least one special character (@, #, $, or &)',
  })
  password: string;

  @IsDateString({}, { message: 'Invalid Date' })
  joiningDate: string;

  @IsUrl({}, { message: 'Social Media Link must be a valid URL' })
  socialMediaLink: string;
}
export class CreateCustomerDTO {
  @IsString({ message: 'Require String here' })
  @IsNotEmpty({ message: 'Name field cannot be empty' })
  @Matches(/^[^0-9]*$/, { message: 'Name should not contain any numbers' })
  name: string;

  @IsNotEmpty({ message: 'Password field cannot be empty' })
  @Matches(/[#@$&]/, {
    message:
      'Password must contain at least one special character (@, #, $, or &)',
  })
  password: string;

  @IsDateString({}, { message: 'Invalid Date' })
  joiningDate: string;

  @IsUrl({}, { message: 'Social Media Link must be a valid URL' })
  socialMediaLink: string;
}

export class CreateManagerDTO {
  name: string;
  password: string;
}

export class UpdateCustomerDTO extends PartialType(CreateCustomerDTO) {}
export class UpdateSellerDTO extends PartialType(CreateSellerDTO) {}
export class UpdateManagerDTO extends PartialType(CreateManagerDTO) {}

