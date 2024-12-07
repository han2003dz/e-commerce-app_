import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { CategoriesService } from './category.service';
import { CreateCategoryDto } from './dto/category.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post('/create')
  @UseInterceptors(FilesInterceptor('files'))
  createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.categoriesService.createCategory(createCategoryDto, files);
  }

  @Get('/:categoryId')
  findById(@Param('categoryId') categoryId: string) {
    return this.categoriesService.findById(categoryId);
  }
}
