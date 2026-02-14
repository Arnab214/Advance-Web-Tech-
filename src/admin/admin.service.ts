import { Injectable } from '@nestjs/common';
import { CreateManagerDTO, CreateAdminDTO } from './admin.dto';

@Injectable()
export class AdminService {
  getHello(): object {
    return { message: 'Hello admin !' };
  }

  findManager(name: string): object {
    return { name: name, Designation: 'Manager' };
  }

  addManager(myobj: CreateManagerDTO) {
    return { message: 'Add manager successful', myobj };
  }

  findCustomer(name: string): object {
    return { name: name, Designation: 'Customer' };
  }

  addAdmin(myobj: CreateAdminDTO) {
    return { message: 'Add Admin successful', myobj };
  }

  findAdmin(name: string): object {
    return { name: name, Designation: 'Admin' };
  }

  deleteCustomer(name: string): object {
    return {
      message: 'Delete Successful',
      name: name,
      Designation: 'Customer',
    };
  }

  deleteManager(name: string): object {
    return {
      message: 'Delete Successful',
      name: name,
      Designation: 'Manager',
    };
  }
}
