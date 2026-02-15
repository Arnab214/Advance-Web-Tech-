export class CustomerDTO {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export class CartDTO {
  productId: number;
  quantity: number;
}

export class ReviewDTO {
  productId: number;
  rating: number;
  comment: string;
}
