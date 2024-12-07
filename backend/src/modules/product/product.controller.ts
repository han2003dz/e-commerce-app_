import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './product.service';
import { CreateProductDto, ListProductDto } from './dto/product.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('/create')
  @UseInterceptors(FilesInterceptor('files'))
  createProduct(
    @Body() createProductDto: CreateProductDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.productsService.createProduct(createProductDto, files);
  }

  @Get('/best-seller')
  bestSellers(@Query('limit') limit: string = '3') {
    return this.productsService.bestSellers(Number(limit));
  }

  @Get('/list')
  getListProducts(@Query() listProductDto: ListProductDto) {
    console.log('OK');
    return this.productsService.getListProducts(listProductDto);
  }

  @Get('/detail/:productId')
  findById(@Param() productId: string) {
    console.log('OKKKKKK');
    return this.productsService.getProductDetail(productId);
  }
}
