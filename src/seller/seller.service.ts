import { Injectable } from '@nestjs/common';
import { CreateProductDTO, UpdateProfileDTO, UpdateSellerStatusDTO } from './seller.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seller } from './seller.entity';

@Injectable()
export class SellerService {

   constructor(
    @InjectRepository(Seller)
    private sellerRepo: Repository<Seller>, 
  ) {}
  getHello(): object {
    return { message: 'Hello Seller!' };
  }
 
  addProduct(myobj: CreateProductDTO) {
    return {message: 'Product added successfully',product: myobj,};
  }
 
  getInventory(): object {
    return {message: 'Seller Inventory List',};
  }
 
  deleteItem(id: string): object {
    return {
      message: 'Item deleted successfully',
      productId: id,
    };
  }
 
  addDiscount(id: string, discount: number): object {
    return {
      message: 'Discount added successfully',
      productId: id,
      discount: discount + '%',
    };
  }
 
  getReviews(): object {
    return {message: 'Product Reviews List',};
  }
 
  updateProfile(myobj: UpdateProfileDTO) {
    return {
      message: 'Profile updated successfully',
      profile: myobj,
    };
  }
async createSeller(data:any){
  return this.sellerRepo.save(data);
}

  async updateSellerStatus(id:number,status:string){
  await this.sellerRepo.update(id,{status});
  return this.sellerRepo.findOneBy({id:id});
}
 async getInactiveSellers(){
  return this.sellerRepo.find({
    where:{status:'inactive'}
  });
}
 async getSellersOlderThan40(){
  return this.sellerRepo
  .createQueryBuilder('seller')
  .where('seller.age > :age',{age:40})
  .getMany();
}

}

