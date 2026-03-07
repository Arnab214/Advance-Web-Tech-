import { Controller,Get,Post,Body,Param,Delete,Put,UsePipes,ValidationPipe } from '@nestjs/common';
import { ManagerService } from './manager.service';

import {
  CreateManagerDTO,
  CreateCustomerDTO,
  CreateSellerDTO,
  UpdateManagerDTO,
  UpdateSellerDTO,
  UpdateCustomerDTO
} from './manager.dto';

@Controller('manager')
export class ManagerController {
  constructor(private readonly managerService: ManagerService) {}
  @Get('managers')
   getAllManagers() {
    return this.managerService.getAllManagers();
  }
  @Get()
  getHello(): object {
    return this.managerService.getHello();
  }
  @Get('managers/:id')
 getManagerById(@Param('id') id: string) {
    return this.managerService.getManagerById(id);
  }
   //Find manager
  @Get('findManager/:name')
  findManager(@Param('name') name: string): object {
    return this.managerService.findManager(name);
  }
  @Post('manager_add')
  @UsePipes(new ValidationPipe())
  addManager(@Body() myobj: CreateManagerDTO): object {
    return this.managerService.addManager(myobj);
  }
  @Post('seller_add')
  @UsePipes(new ValidationPipe())
  addSeller(@Body() myobj: CreateSellerDTO): object {
    return this.managerService.addSeller(myobj);
  }
  @Post('customer_add')
  @UsePipes(new ValidationPipe())
  addCustomer(@Body() myobj: CreateCustomerDTO): object {
    return this.managerService.addCustomer(myobj);
  }
 @Delete('delete_manager')
@UsePipes(new ValidationPipe())
deleteManager(@Body('name') name: string): object {
  return this.managerService.deleteManager(name);
}

@Delete('delete_customer')
@UsePipes(new ValidationPipe())
deleteCustomer(@Body('name') name: string): object {
  return this.managerService.deleteCustomer(name);
}

@Delete('delete_seller')
@UsePipes(new ValidationPipe())
deleteSeller(@Body('name') name: string): object {
  return this.managerService.deleteSeller(name);
}
   @Get('findCustomer/:name')
  findCustomer(@Param('name') name: string): object {
    return this.managerService.findCustomer(name);
  }      
   @Get('findSeller/:name')
  findSeller(@Param('name') name: string): object {
    return this.managerService.findSeller(name);
  }
   @Get('findManager/:name')
  findManger(@Param('name') name: string): object {
    return this.managerService.findCustomer(name);
  }
@Put('updateManager/:name')
  @UsePipes(new ValidationPipe())
  updateManager(
    @Param('name') name: string,
    @Body() myobj: UpdateManagerDTO,
  ): object {
    return this.managerService.updateManager(name, myobj);
  }

@Put('updateSeller/:name')
  @UsePipes(new ValidationPipe())
  updateSeller(
    @Param('name') name: string,
    @Body() myobj: UpdateSellerDTO,
  ): object {
    return this.managerService.updateSeller(name, myobj);
  }

@Put('updateCustomer/:name')
  @UsePipes(new ValidationPipe())
  updateCustomer(
    @Param('name') name: string,
    @Body() myobj: UpdateCustomerDTO,
  ): object {
    return this.managerService.updateCustomer(name, myobj);
  }


}