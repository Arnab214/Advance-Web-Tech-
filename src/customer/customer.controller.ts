import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDTO, CartDTO, ReviewDTO } from './customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get('profile')
  getProfile(): object {
    return this.customerService.getProfile();
  }

  @Put('update')
  updateProfile(@Body() customerDTO: CustomerDTO): object {
    return this.customerService.updateProfile(customerDTO);
  }

  @Get('orders')
  getOrders(): object {
    return this.customerService.getOrders();
  }


  @Post('cart')
  addToCart(@Body() cartDTO: CartDTO): object {
    return this.customerService.addToCart(cartDTO);
  }

  @Get('wishlist')
  getWishlist(): object {
    return this.customerService.getWishlist();
  }

  @Delete('account')
  deleteAccount(): object {
    return this.customerService.deleteAccount();
  }


  @Post('review')
  addReview(@Body() reviewDTO: ReviewDTO): object {
    return this.customerService.addReview(reviewDTO);
  }

  @Get('support')
  getSupport(): object {
    return this.customerService.getSupport();
  }
}
