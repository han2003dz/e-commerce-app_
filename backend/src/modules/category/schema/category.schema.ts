import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Options } from '../../../common/config/mongoose.config';

export const CATEGORIES_MODEL = 'categories';

@Schema({ ...Options, collection: 'categories' })
export class Category {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({})
  description: string;

  @Prop({ default: true })
  is_active: boolean;

  @Prop({ type: [String] })
  images: string[];
}
export type CategoryDocument = HydratedDocument<Category>;
export const CategorySchema = SchemaFactory.createForClass(Category);
