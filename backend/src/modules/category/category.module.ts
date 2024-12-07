import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CATEGORIES_MODEL, CategorySchema } from './schema/category.schema';
import { CategoriesController } from './category.controller';
import { CategoriesService } from './category.service';
import { CloudinaryService } from 'src/common/config/cloudinary.config';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CATEGORIES_MODEL,
        schema: CategorySchema,
      },
    ]),
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService, CloudinaryService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
