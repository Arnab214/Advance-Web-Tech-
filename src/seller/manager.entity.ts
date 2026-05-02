import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Seller } from './seller.entity';

@Entity()
export class Manager {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column()
  department?: string;

  @OneToOne(() => Seller, seller => seller.manager)
  seller?: Seller;
}