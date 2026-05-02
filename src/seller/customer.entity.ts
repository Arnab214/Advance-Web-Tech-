import { Entity, PrimaryGeneratedColumn, Column, ManyToOne ,ManyToMany } from 'typeorm';
import { Seller } from './seller.entity';
import { Product } from './product.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @ManyToOne(() => Seller, seller => seller.customers)
  seller!: Seller;
  @ManyToMany(() => Product, product => product.customers)
  products!: Product[];
}