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
