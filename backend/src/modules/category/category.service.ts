import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/category.dto';
import { InjectModel } from '@nestjs/mongoose';
import {
  CATEGORIES_MODEL,
  Category,
  CategoryDocument,
} from './schema/category.schema';
import { PaginateModel } from 'mongoose';
import { CloudinaryService } from 'src/common/config/cloudinary.config';

@Injectable()
export class CategoriesService {
  constructor(
    private readonly cloudinaryService: CloudinaryService,
    @InjectModel(CATEGORIES_MODEL)
    private readonly categoriesModel: PaginateModel<CategoryDocument>,
  ) {}
  async createCategory(
    createCategoryDto: CreateCategoryDto,
    files: Express.Multer.File[],
  ) {
    try {
      const uploadPromises = files.map((file) =>
        this.cloudinaryService.uploadImage(file),
      );

      const uploadedImages = await Promise.all(uploadPromises);
      const imageUrls = uploadedImages.map((img) => img.secure_url);
      return await this.categoriesModel.create({
        ...createCategoryDto,
        images: imageUrls,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async findById(id: string): Promise<Category | null> {
    return await this.categoriesModel.findById({ _id: id });
  }
}
