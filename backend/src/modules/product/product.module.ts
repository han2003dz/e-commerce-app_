import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PRODUCT_MODEL, ProductSchema } from './schema/product.schema';
import { ProductsController } from './product.controller';
import { ProductsService } from './product.service';
import { CloudinaryService } from 'src/common/config/cloudinary.config';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PRODUCT_MODEL,
        schema: ProductSchema,
      },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, CloudinaryService],
  exports: [ProductsService],
})
export class ProductsModule {}
