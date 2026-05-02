import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seller } from '../seller/seller.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Seller)
    private sellerRepository: Repository<Seller>,

    private jwtService: JwtService,
  ) {}

  async validateSeller(email: string, password: string): Promise<any> {
    // password field specially select korte hobe
    const seller = await this.sellerRepository.findOne({
      where: { email },
      select: ['id', 'fullname', 'email', 'age', 'status', 'password'], // password must include
    });

    if (!seller) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const isMatch = await bcrypt.compare(password, seller.password);
    if (!isMatch) {
      throw new HttpException('Invalid password', HttpStatus.UNAUTHORIZED);
    }

    // Remove password before returning to frontend (security)
    const { password: _, ...userWithoutPassword } = seller;
    return userWithoutPassword;
  }

  async login(email: string, password: string) {
    const user = await this.validateSeller(email, password);

    const payload = { 
      email: user.email, 
      id: user.id 
    };

    return {
      access_token: this.jwtService.sign(payload),
      user,                   
    };
  }
}