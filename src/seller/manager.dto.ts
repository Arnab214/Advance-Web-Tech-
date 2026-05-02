import { IsString, IsOptional } from 'class-validator';

export class CreateManagerDTO {

  @IsString()
  name?: string;

  @IsString()
  department?: string;
}

export class UpdateManagerDTO {

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  department?: string;
}