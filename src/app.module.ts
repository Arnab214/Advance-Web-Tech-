import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { SellerModule } from './seller/seller.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AdminModule,CustomerModule,SellerModule,AuthModule,

=======
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
// import { AdminEntity } from './admin/admin.entity';

@Module({
  imports: [
>>>>>>> e50dfc92036657f567168067f3799611a747e68b
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
<<<<<<< HEAD
      password: 'Alifali00',
      database: 'seller',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],

=======
      password: 'root',
      database: 'Task3',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AdminModule,
  ],
>>>>>>> e50dfc92036657f567168067f3799611a747e68b
  controllers: [],
  providers: [],
})
export class AppModule {}