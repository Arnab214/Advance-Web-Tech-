<<<<<<< HEAD
import { IsString, Matches, MinLength, IsNumber, IsInt, IsIn, IsOptional, IsEmail} from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @Matches(/^[A-Za-z ]*$/, {
    message: 'Name must not contain special characters'
  })
  name!: string;

  @IsString()
  @MinLength(6)
  @Matches(/[a-z]/, {
    message: 'Password must contain at least one lowercase letter'
  })
  password!: string;

  @IsString()
  @Matches(/^01[0-9]\d{9}$/, {
    message: 'Phone must start with 01'
  })
  phone!: string;

  @IsNumber()
  price!: number;
  
  @IsString()
  description!: string;
  
  @IsNumber()
  stock!: number;

  @IsNumber()
  discount!: number;
}

export class UpdateProductDTO {
  @IsOptional()
  @IsString()
  @Matches(/^[A-Za-z ]*$/, {
    message: 'Name must not contain special characters'
  })
  name!: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  @Matches(/[a-z]/, {
    message: 'Password must contain at least one lowercase letter'
  })
  password!: string;

  @IsOptional()
  @IsString()
  @Matches(/^01[0-9]\d{9}$/, {
    message: 'Phone must start with 01'
  })
  phone!: string;

  @IsOptional()
  @IsNumber()
  price!: number;
  
  @IsOptional()
  @IsString()
  description!: string;
  
  @IsOptional()
  @IsNumber()
  stock!: number;

  @IsOptional()
  @IsNumber()
  discount!: number;
  
}

export class CreateSellerDTO {

  @IsString()
  fullname!: string;

  @IsEmail()
  email!: string;
  
  @IsNumber()
  age!: number;

  @IsString()
  @MinLength(6)
  password!: string;

}

export class UpdateSellerDTO {
  @IsOptional()
  @IsString()
  @Matches(/^[A-Za-z ]*$/, {
    message: 'Full name must contain only letters'
  })
  fullname!: string;

  @IsOptional()
  @IsEmail()
  email!: string;

  @IsOptional()
  @IsNumber()
  age?: number;

  @IsOptional()
  @IsString()
  password?: string;


}

export class UpdateSellerStatusDTO {
  @IsString()
  @IsIn(['active', 'inactive'])
  status!: string;
}
=======
import { IsString, Matches, MinLength,IsNumber, IsInt, IsIn } from 'class-validator';

export class CreateProductDTO {

 @IsString()
 @Matches(/^[A-Za-z ]*$/, {
 message:'Name must not contain special characters'
 })
 name: string;

 @IsString()
 @MinLength(6)
 @Matches(/[a-z]/,{
 message:'Password must contain at least one lowercase letter'
 })
 password:string;

 @IsString()
 @Matches(/^01[0-9]\d{9}$/,{
 message:'Phone must start with 01'
 })
 phone:string;

 @IsNumber()
 price: number;
@IsString()
description: string;
@IsNumber()
 stock: number;

}
 

 
export class UpdateProfileDTO {
 name:string;
 phone:string;
 address:string;
}
 
export class CreateSellerDTO {

 @IsString()
 @Matches(/^[A-Za-z ]*$/,{
 message:'Full name must contain only letters'
 })
 fullName:string;

 @IsInt()
 age:number;

 @IsString()
 @IsIn(['active','inactive'])
 status:string;

}

export class UpdateSellerStatusDTO{

 @IsString()
 @IsIn(['active','inactive'])
 status:string;

}
>>>>>>> e50dfc92036657f567168067f3799611a747e68b
