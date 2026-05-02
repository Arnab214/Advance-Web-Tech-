import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';   // ← Import AuthModule
import { SellerController } from './seller.controller';
import { SellerService } from './seller.service';
import { Seller } from './seller.entity';
import { Product } from './product.entity';
import { Manager } from './manager.entity';
import { Customer } from './customer.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Seller, Product, Manager, Customer]),
    AuthModule,                   
  ],
  controllers: [SellerController],
  providers: [SellerService],
  exports: [SellerService],
})
export class SellerModule {}