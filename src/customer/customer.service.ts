import { Injectable } from '@nestjs/common';
import { CustomerDTO, CartDTO, ReviewDTO } from './customer.dto';

@Injectable()
export class CustomerService {

  getProfile(): object {
    return {
      success: true,
      data: {
        id: 1,
        name: "Customer One",
        email: "customer@swapowner.com",
        role: "customer"
      }
    };
  }

  updateProfile(customerDTO: CustomerDTO): object {
    return {
      success: true,
      message: "Profile updated successfully",
      updatedData: customerDTO
    };
  }

  getOrders(): object {
    return {
      success: true,
      orders: [
        { orderId: 101, product: "Used iPhone 11", price: 25000, status: "Delivered" },
        { orderId: 102, product: "Laptop", price: 40000, status: "Pending" }
      ]
    };
  }

  addToCart(cartDTO: CartDTO): object {
    return {
      success: true,
      message: "Product added to cart",
      cartItem: cartDTO
    };
  }

  getWishlist(): object {
    return {
      success: true,
      wishlist: [
        { productId: 1, name: "Camera" },
        { productId: 2, name: "Headphone" }
      ]
    };
  }

  deleteAccount(): object {
    return {
      success: true,
      message: "Customer account deleted successfully"
    };
  }

  addReview(reviewDTO: ReviewDTO): object {
    return {
      success: true,
      message: "Review submitted successfully",
      review: reviewDTO
    };
  }

  getSupport(): object {
    return {
      success: true,
      support: {
        email: "support@swapowner.com",
        phone: "+8801XXXXXXXXX",
        message: "How can we help you?"
      }
    };
  }
}
