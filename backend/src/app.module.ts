import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ConfigModule as ConfigNestModule,
  ConfigService as ConfigNestService,
} from '@nestjs/config';

import { TransformInterceptor } from './common/interceptors/transfrom.interceptors';
import { ExceptionHandler } from './common/exceptions/exception.filter';

import mongooseAggregatePaginateV2 from './common/libs/mongoose-aggregate-paginate-v2';
import { ProductsModule } from './modules/product/product.module';
import { CategoriesModule } from './modules/category/category.module';
import mongoosePaginate from 'mongoose-paginate-v2';
import { CloudinaryService } from './common/config/cloudinary.config';

@Module({
  imports: [
    ConfigNestModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigNestModule],
      inject: [ConfigNestService],
      useFactory: async (config: ConfigNestService) => ({
        uri: config.get<string>('MONGODB_URI'), // Loaded from .ENV
        connectionFactory: (connection) => {
          connection.plugin(mongoosePaginate);
          connection.plugin(mongooseAggregatePaginateV2);
          return connection;
        },
      }),
    }),
    CategoriesModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
    { provide: APP_FILTER, useClass: ExceptionHandler },
    CloudinaryService,
  ],
  exports: [CloudinaryService],
})
export class AppModule {}
