import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { ManagerModule} from './manager/manager.module'

@Module({
  imports: [AdminModule,CustomerModule,ManagerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
