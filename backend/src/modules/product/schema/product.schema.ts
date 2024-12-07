import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Options } from '../../../common/config/mongoose.config';

import { CATEGORIES_MODEL } from '../../../modules/category/schema/category.schema';

export const PRODUCT_MODEL = 'products';

@Schema({ ...Options, collection: 'products' })
export class Product {
  @Prop({ required: true })
  title: string;

  @Prop({})
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: false, default: 0 })
  discount: number;

  @Prop({ required: true, default: 100 })
  quantity: number;

  @Prop({ default: 0, required: false })
  sold: number;

  @Prop({ default: true })
  is_active: boolean;

  @Prop({ type: [String] })
  images: string[];

  @Prop({ type: String, ref: CATEGORIES_MODEL })
  category_id: string;
}
export type ProductDocument = HydratedDocument<Product>;
export const ProductSchema = SchemaFactory.createForClass(Product);
