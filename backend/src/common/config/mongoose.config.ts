import { SchemaOptions } from '@nestjs/mongoose';
import { formatDecimal } from '../utils/mongoose.util';

export const Options: SchemaOptions = {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (_, ret: any) {
      delete ret.id;
      delete ret.__v;
      return formatDecimal(ret);
    },
  },
  toObject: {
    virtuals: true,
    transform: function (_, ret: any) {
      delete ret.id;
      delete ret.__v;
      return formatDecimal(ret);
    },
  },
};
