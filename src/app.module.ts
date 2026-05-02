import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { SellerModule } from './seller/seller.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AdminModule,CustomerModule,SellerModule,AuthModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Alifali00',
      database: 'seller',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}