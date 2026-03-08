import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Seller {

  @PrimaryGeneratedColumn()
  id:number;

  @Column({length:100})
  fullName:string;

  @Column()
  age:number;

  @Column({
    type:'varchar',
    default:'active'
  })
  status:string;

}