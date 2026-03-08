import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Raw } from 'typeorm';
import {
  CreateManagerDTO,
  CreateAdminDTO,
  UpdateManagerDTO,
} from './admin.dto';
import { AdminEntity } from './admin.entity';

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
  updateManager(name: string, updateData: UpdateManagerDTO): object {
    return {
      message: `Manager ${name} updated successfully`,
      updatedData: updateData,
    };
  }
  //task3
  constructor(
    @InjectRepository(AdminEntity)
    private adminRepository: Repository<AdminEntity>,
  ) {}

  // Create a user [cite: 42]
  async createAdmin(country?: string): Promise<AdminEntity> {
    const newAdmin = this.adminRepository.create({ country });
    return await this.adminRepository.save(newAdmin);
  }

  // Modify the country of an existing user [cite: 43]
  async updateCountry(id: number, country: string): Promise<AdminEntity> {
    await this.adminRepository.update(id, { country });
    return this.adminRepository.findOneBy({ id });
  }

  // Retrieve users by their joining date [cite: 44]
  async getByDate(date: string): Promise<AdminEntity[]> {
    return await this.adminRepository.find({
      where: {
        joiningDate: Raw((alias) => `CAST(${alias} AS DATE) = :date`, { date }),
      },
    });
  }

  // Retrieve users with the default country value ('Unknown') [cite: 45]
  async getUnknownCountry(): Promise<AdminEntity[]> {
    return await this.adminRepository.find({
      where: { country: 'Unknown' },
    });
  }
}
