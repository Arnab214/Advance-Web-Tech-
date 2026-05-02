import { Controller, Get, Post, Delete, Body, Param,UseInterceptors, UploadedFile ,ParseIntPipe, Patch } from '@nestjs/common';
import { SellerService } from './seller.service';
import { CreateProductDTO,UpdateProductDTO, CreateSellerDTO, UpdateSellerDTO,UpdateSellerStatusDTO } from './seller.dto';
import {CreateManagerDTO} from './manager.dto';
import {CreateCustomerDTO} from './customer.dto'; 
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from "multer";
import {UsePipes,ValidationPipe,} from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';


@Controller('seller')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {} 

  @Get()
  getHello() {
    return this.sellerService.getHello();
  }

  @UseGuards(JwtAuthGuard)
  @Post('createSeller')
  createSeller(@Body() data: CreateSellerDTO){
  return this.sellerService.createSeller(data);
  }
  
   @UseGuards(JwtAuthGuard)
  @Get('all')
  getAllSellers(){
    return this.sellerService.getAllSellers();
  }

   //Get Sellers By ID
  @Get(':id')
  getSellerById(@Param('id', ParseIntPipe) id: number){
    return this.sellerService.getSellerById(id);
  }

  //Update By Seller ID
  @Patch('updateSeller/:id')
  updateSeller(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateSellerDTO){
    return this.sellerService.updateSeller(id, data);
  }

  //Delete Seller By ID
  @Delete('deleteSeller/:id')
  deleteSeller(@Param('id', ParseIntPipe) id: number){
    return this.sellerService.deleteSeller(id);
  }

  //Inactive Sellers
@Patch('updateStatus/:id')
updateStatus(@Param('id', ParseIntPipe) id: number,@Body() myobj: UpdateSellerStatusDTO){
  return this.sellerService.updateSellerStatus(id, myobj.status);
}
  //Create Product with PDF Upload
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
   
 //Get All Products
  @Get('products')
  getAllProducts() {
    return this.sellerService.getAllProducts();
  }

  //Update Product By ID
  @Patch('updateProduct/:id')
  updateProduct(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateProductDTO) {
    return this.sellerService.updateProduct(id, data);
  }

  //Delete Product By ID
  @Delete('deleteProduct/:id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.sellerService.deleteProduct(id);
  }
  

 

  // Create Manager
@Post('createManager')
createManager(@Body() data: CreateManagerDTO) {
  return this.sellerService.createManager(data);
}

// Get Manager
@Get('manager/:id')
getManager(@Param('id', ParseIntPipe) id: number) {
  return this.sellerService.getManager(id);
}

// Delete Manager
@Delete('deleteManager/:id')
deleteManager(@Param('id', ParseIntPipe) id: number) {
  return this.sellerService.deleteManager(id);
}

// Create Customer
@Post('createCustomer')
createCustomer(@Body() data: CreateCustomerDTO) {
  return this.sellerService.createCustomer(data);
}

// Get Customer
@Get('customer/:id')
getCustomer(@Param('id', ParseIntPipe) id: number) {
  return this.sellerService.getCustomer(id);
}

// Delete Customer
@Delete('deleteCustomer/:id')
deleteCustomer(@Param('id', ParseIntPipe) id: number) {
  return this.sellerService.deleteCustomer(id);
}

@Post('addProductToCustomer')
addProductToCustomer(@Body() data: { customerId: number; productId: number }){
  return this.sellerService.addProductToCustomer(data.customerId,data.productId);
}

}
