import { Controller, Get, Post, Delete, Body, Param,UseInterceptors, UploadedFile ,ParseIntPipe } from '@nestjs/common';
import { SellerService } from './seller.service';
import {CreateProductDTO,UpdateProfileDTO ,CreateSellerDTO,UpdateSellerStatusDTO } from './seller.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from "multer";
import {UsePipes,ValidationPipe,} from '@nestjs/common';

@Controller('seller')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  @Get()
  getHello() {
    return this.sellerService.getHello();
  }

  @Post('createProduct')
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor('file', {
    fileFilter: (req, file, cb) => {
      if (file.mimetype === 'application/pdf') {
        cb(null, true);
      } else {
        cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'pdf'), false);
      }
    },
    limits: { fileSize: 5 * 1024 * 1024}, // 5MB
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
      },
    }),
  }),
)
createProduct(
  @Body() dto: CreateProductDTO,
  @UploadedFile() file: Express.Multer.File,
) {
  return {
    message: 'Product created successfully',
    product: dto,
    pdfFile: file?.filename,
  };
}
  // Add product

  @Post('addProduct')
  @UsePipes(new ValidationPipe())
  addProduct(@Body() myobj: CreateProductDTO):object {
    return this.sellerService.addProduct(myobj);
  }

  // Get inventory

  @Get('inventory')
  getInventory() {
    return this.sellerService.getInventory();
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
updateProfile(@Body() myobj: UpdateProfileDTO) {
  return this.sellerService.updateProfile(myobj);
}

// Create Seller
@Post('createSeller')
createSeller(@Body() data: CreateSellerDTO){
  return this.sellerService.createSeller(data);
}

// Change Seller Status
@Post('updateStatus/:id')
updateStatus( @Param('id', ParseIntPipe) id: number,
  @Body() myobj: UpdateSellerStatusDTO
){
  return this.sellerService.updateSellerStatus(id, myobj.status);
}
// Get Inactive Sellers
@Get('inactive')
getInactive(){
  return this.sellerService.getInactiveSellers();
}

// Get Sellers Older Than 40
@Get('older40')
getOlder(){
  return this.sellerService.getSellersOlderThan40();
}


}
