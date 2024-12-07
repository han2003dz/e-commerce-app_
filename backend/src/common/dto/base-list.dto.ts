import {
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BaseListDto {
  @ApiProperty()
  @IsNumberString()
  pageNumber: string = '1';

  @ApiProperty()
  @IsNumberString()
  pageSize: string = '10';
}

export class PaginationDtoAndSortDto extends BaseListDto {
  @ApiProperty({ required: false })
  @IsOptional()
  sortBy?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  sortType?: 1 | -1;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  category_id?: string;
}
