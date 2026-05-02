import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDTO,UpdateProductDTO, CreateSellerDTO, UpdateSellerDTO } from './seller.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seller } from './seller.entity';
import { Product } from './product.entity';
import { Manager } from './manager.entity';
import { Customer } from './customer.entity';
import { CreateManagerDTO } from './manager.dto';
import { CreateCustomerDTO } from './customer.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class SellerService {

   constructor(
   @InjectRepository(Seller)
    private sellerRepository: Repository<Seller>,

    @InjectRepository(Product)
    private productRepository: Repository<Product>,

    @InjectRepository(Manager)
    private managerRepository: Repository<Manager>,

    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,


  ) {}

  async getHello(): Promise<string> {
    return "Seller Service Working!";
  }

 

async createSeller(data: CreateSellerDTO): Promise<Seller> {
  if (!data.password || typeof data.password !== 'string') {
    throw new HttpException('Password must be provided', HttpStatus.BAD_REQUEST);
  }
  const hashedPassword = await bcrypt.hash(data.password, 10);
  data.password = hashedPassword;
  return this.sellerRepository.save(data);
}

  async getAllSellers(): Promise<Seller[]> {
    return this.sellerRepository.find();
  }

  async getSellerById(id: number): Promise<Seller | null> {
    return this.sellerRepository.findOneBy({ id: id });
  }

  async updateSeller(id: number, data: UpdateSellerDTO): Promise<Seller | null> {
    await this.sellerRepository.update(id, data);
    return this.sellerRepository.findOneBy({ id: id });
  }

  async deleteSeller(id: number): Promise<void> {
    await this.sellerRepository.delete(id);
  }


  async updateSellerStatus(id: number, status: string): Promise<Seller> {
  await this.sellerRepository.update(id, { status });
  const seller = await this.getSellerById(id);
  if (!seller) {
    throw new HttpException('Seller not found', HttpStatus.NOT_FOUND);
  }
  return seller;
}
 

   async createProduct(data: CreateProductDTO): Promise<Product> {
    return this.productRepository.save(data);
  }

  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async updateProduct(id: number, data: UpdateProductDTO): Promise<Product | null> {
    await this.productRepository.update(id, data);
    return this.productRepository.findOneBy({ id: id });
  }

  async deleteProduct(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }

  async addDiscount(id: string, discount: number): Promise<Product | null> {
    await this.productRepository.update(Number(id), { discount: discount });
    return this.productRepository.findOneBy({ id: Number(id) });
  }


  async createManager(data: CreateManagerDTO): Promise<Manager> {
  return this.managerRepository.save(data);
}

async getManager(id: number): Promise<Manager | null> {
  return this.managerRepository.findOneBy({ id: id });
}

async deleteManager(id: number): Promise<void> {
  await this.managerRepository.delete(id);
}


async createCustomer(data: CreateCustomerDTO): Promise<Customer> {
  return this.customerRepository.save(data);
}

async getCustomer(id: number): Promise<Customer | null> {
  return this.customerRepository.findOneBy({ id: id });
}

async deleteCustomer(id: number): Promise<void> {
  await this.customerRepository.delete(id);
}

async addProductToCustomer(customerId: number, productId: number) {
  const customer = await this.customerRepository.findOne({
    where: { id: customerId },
    relations: ['products'],
  });

  const product = await this.productRepository.findOneBy({ id: productId });

  if (!customer || !product) {
    throw new Error('Customer or Product not found');
  }

  customer.products.push(product);

  return this.customerRepository.save(customer);
}

}
  



