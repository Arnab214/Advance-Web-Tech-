import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import {
  CreateManagerDTO,
  CreateAdminDTO,
  UpdateManagerDTO,
} from './admin.dto';

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
  @UsePipes(new ValidationPipe())
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

  @Delete('deleteManager/:name')
  deleteManager(@Param('name') name: string): object {
    return this.adminService.deleteManager(name);
  }

  //manager update
  @Put('updateManager/:name')
  @UsePipes(new ValidationPipe())
  updateManager(
    @Param('name') name: string,
    @Body() myobj: UpdateManagerDTO,
  ): object {
    return this.adminService.updateManager(name, myobj);
  }

  //task3
  @Post('create')
  create(@Body('country') country: string) {
    return this.adminService.createAdmin(country);
  }

  @Put('update-country/:id')
  update(@Param('id') id: number, @Body('country') country: string) {
    return this.adminService.updateCountry(id, country);
  }

  @Get('by-date')
  getByDate(@Query('date') date: string) {
    return this.adminService.getByDate(date);
  }

  @Get('unknown-country')
  getUnknown() {
    return this.adminService.getUnknownCountry();
  }
}
