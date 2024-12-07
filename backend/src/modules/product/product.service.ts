import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Product,
  PRODUCT_MODEL,
  ProductDocument,
} from './schema/product.schema';
import { PaginateModel } from 'mongoose';
import { CreateProductDto, ListProductDto } from './dto/product.dto';
import { CloudinaryService } from 'src/common/config/cloudinary.config';

interface Query {
  category_id?: string;
  is_active: boolean;
}

@Injectable()
export class ProductsService {
  constructor(
    private readonly cloudinaryService: CloudinaryService,
    @InjectModel(PRODUCT_MODEL)
    private readonly productsModel: PaginateModel<ProductDocument>,
  ) {}

  async createProduct(
    createProductDto: CreateProductDto,
    files: Express.Multer.File[],
  ): Promise<Product> {
    try {
      console.log('files', files);
      const uploadPromises = files.map((file) =>
        this.cloudinaryService.uploadImage(file),
      );

      const uploadedImages = await Promise.all(uploadPromises);
      const imageUrls = uploadedImages.map((img) => img.secure_url);
      return this.productsModel.create({
        ...createProductDto,
        images: imageUrls,
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  async getProductDetail(productId: string) {
    try {
      return await this.productsModel.find({ _id: productId });
    } catch (error) {
      console.log('error', error);
    }
  }

  async bestSellers(limit: number): Promise<Product[]> {
    return await this.productsModel
      .find()
      .sort({ sold: -1 })
      .limit(limit)
      .exec();
  }

  async getListProducts(listProductDto: ListProductDto): Promise<Product[]> {
    console.log('OK');
    const {
      pageSize,
      pageNumber,
      sortType = -1,
      sortBy = 'timestamp',
      category_id,
    } = listProductDto;

    const skip = (Number(pageNumber) - 1) * Number(pageSize);
    const filter: Query = {
      is_active: true,
    };
    if (category_id) {
      filter.category_id = category_id;
    }
    return await this.productsModel
      .find(filter)
      .sort({ [sortBy]: sortType })
      .skip(skip)
      .limit(Number(pageSize))
      .exec();
  }
}
