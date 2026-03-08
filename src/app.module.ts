import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
// import { AdminEntity } from './admin/admin.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'Task3',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
