import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from '../seller/seller.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Seller]),
    JwtModule.register({
      secret: 'Alifa',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService, JwtModule],   
})
export class AuthModule {}