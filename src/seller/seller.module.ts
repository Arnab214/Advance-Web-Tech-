import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
<<<<<<< HEAD
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
=======
import { SellerController } from './seller.controller';
import { SellerService } from './seller.service';
import { Seller } from './seller.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Seller])],
>>>>>>> e50dfc92036657f567168067f3799611a747e68b
  controllers: [SellerController],
  providers: [SellerService],
  exports: [SellerService],
})
export class SellerModule {}