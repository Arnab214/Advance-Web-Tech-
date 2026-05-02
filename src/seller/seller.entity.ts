<<<<<<< HEAD
import {Entity, PrimaryGeneratedColumn,Column,OneToMany,OneToOne,JoinColumn,} from 'typeorm';
import { Product } from './product.entity';
import { Manager } from './manager.entity';
import { Customer } from './customer.entity';

@Entity()
export class Seller {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  fullname!: string;

  @Column()
  email!: string;

   @Column()
  age!: number;

  @Column({ default: 'active' })
  status!: string;

  @Column({ select: false })
  password!: string;


  @OneToMany(() => Product, product => product.seller)
  products!: Product[];

  @OneToOne(() => Manager, manager => manager.seller, { cascade: true })
  @JoinColumn()
  manager!: Manager;

  @OneToMany(() => Customer, customer => customer.seller)
  customers!: Customer[];
=======
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

>>>>>>> e50dfc92036657f567168067f3799611a747e68b
}