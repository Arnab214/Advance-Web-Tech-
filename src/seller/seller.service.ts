import { Injectable } from '@nestjs/common';
import { CreateProductDTO, UpdateProfileDTO } from './seller.dto';
 
@Injectable()
export class SellerService {
  getHello(): object {
    return { message: 'Hello Seller!' };
  }
 
  addProduct(myobj: CreateProductDTO) {
    return {message: 'Product added successfully',product: myobj,};
  }
 
  getInventory(): object {
    return {message: 'Seller Inventory List',};
  }
 
  updatePrice(id: string, price: number): object {
    return {
      message: 'Price updated successfully',
      productId: id,
      newPrice: price,
    };
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
}
 