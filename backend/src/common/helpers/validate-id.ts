import { Types } from 'mongoose';

export const validateObjectId = (id: string): Types.ObjectId => {
  console.log('id', id);
  if (!id) {
    throw new Error('Invalid ObjectId');
  }
  return new Types.ObjectId(id);
};
