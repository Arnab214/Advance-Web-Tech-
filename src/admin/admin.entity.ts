import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Generated,
} from 'typeorm';

@Entity('admins')
export class AdminEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'uuid' })
  @Generated('uuid')
  uniqueId: string;

  @CreateDateColumn({ type: 'timestamp' })
  joiningDate: Date;

  @Column({ length: 30, default: 'Unknown' })
  country: string;
}
