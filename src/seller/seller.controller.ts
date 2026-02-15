import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { SellerService } from './seller.service';

@Controller('seller')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  @Get()
  getHello() {
    return this.sellerService.getHello();
  }

  // Add product

  @Post('addProduct')
  addProduct(@Body() product) {
    return this.sellerService.addProduct(product);
  }

  // Get inventory

  @Get('inventory')
  getInventory() {
    return this.sellerService.getInventory();
  }

  // Update price 

  @Post('updatePrice')
  updatePrice(@Body() data: { id: string; price: number }) {
    return this.sellerService.updatePrice(data.id, data.price);
  }

  // Delete item 

  @Delete('deleteItem/:id')
  deleteItem(@Param('id') id: string) {
    return this.sellerService.deleteItem(id);
  }

  // Add discount 

  @Post('addDiscount')
  addDiscount(@Body() data: { id: string; discount: number }) {
    return this.sellerService.addDiscount(data.id, data.discount);
  }

  // Get reviews
  @Get('reviews')
  getReviews() {
    return this.sellerService.getReviews();
  }

  // Update profile 
  
  @Post('updateProfile')
  updateProfile(@Body() profile) {
    return this.sellerService.updateProfile(profile);
  }
}
