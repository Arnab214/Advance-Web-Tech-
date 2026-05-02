import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,ManyToMany,JoinTable } from 'typeorm';
import { Seller } from './seller.entity';
import { Customer } from './customer.entity';

@Entity()
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  price!: number;

  @Column()
  phone!: string;

  @Column()
  discount!: number;

  @ManyToOne(() => Seller, seller => seller.products)
  seller!: Seller;
  @ManyToMany(() => Customer, customer => customer.products)
@JoinTable()
customers!: Customer[];
}