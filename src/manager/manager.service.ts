import { Injectable } from '@nestjs/common';
import {
  CreateManagerDTO,
  CreateSellerDTO,
  UpdateCustomerDTO,
  CreateCustomerDTO,
  UpdateManagerDTO,
  UpdateSellerDTO
} from './manager.dto';

@Injectable()
export class ManagerService {
  getHello(): object {
    return { message: 'Hello manager !' };
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

  addCustomer(myobj: CreateCustomerDTO) {
    return { message: 'Add Customer successful', myobj };
  }
  addSeller(myobj: CreateSellerDTO) {
    return { message: 'Add Seller successful', myobj };
  }

  findAdmin(name: string): object {
    return { name: name, Designation: 'Admin' };
  }
  findSeller(name: string): object {
    return { name: name, Designation: 'Seller' };
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
  deleteSeller(name: string): object {
    return {
      message: 'Delete Successful',
      name: name,
      Designation: 'Seller',
    };
  }
  getAllManagers(): object {
  return {
    message: "All managers list"
  };
}
getManagerById(id: string): object {
  return {
    id: id,
    designation: "Manager"
  };
}
  updateManager(name: string, updateData: UpdateManagerDTO): object {
    return {
      message: `Manager ${name} updated successfully`,
      updatedData: updateData,
    };
  }
  updateSeller(name: string, updateData: UpdateSellerDTO): object {
    return {
      message: `Seller ${name} updated successfully`,
      updatedData: updateData,
    };
  }
  updateCustomer(name: string, updateData: UpdateCustomerDTO): object {
    return {
      message: `Customer ${name} updated successfully`,
      updatedData: updateData,
    };
  }

}
