import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateManagerDTO, CreateAdminDTO } from './admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  //welcome greeting for admin
  @Get()
  getHello(): object {
    return this.adminService.getHello();
  }

  //Find manager
  @Get('findManager/:name')
  findManager(@Param('name') name: string): object {
    return this.adminService.findManager(name);
  }

  //add new manager
  @Post('manager_add')
  addManager(@Body() myobj: CreateManagerDTO): object {
    return this.adminService.addManager(myobj);
  }

  //find customer
  @Get('findCustomer/:name')
  findCustomer(@Param('name') name: string): object {
    return this.adminService.findCustomer(name);
  }

  //add admin
  @Post('admin_add')
  addAdmin(@Body() myobj: CreateAdminDTO): object {
    return this.adminService.addAdmin(myobj);
  }

  //find admin
  @Get('findAdmin/:name')
  findAdmin(@Param('name') name: string): object {
    return this.adminService.findAdmin(name);
  }

  //delete customer
  @Delete('deleteCustomer/:name')
  deleteCustomer(@Param('name') name: string): object {
    return this.adminService.deleteCustomer(name);
  }

  //delete Manager
  @Delete('deleteManager/:name')
  deleteManager(@Param('name') name: string): object {
    return this.adminService.deleteManager(name);
  }
}
