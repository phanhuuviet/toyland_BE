import { IsMe } from '@components/order/order.constant';
import { PaginationQuery } from '@utils/pagination.query';
import { Transform } from 'class-transformer';
import { IsEnum, IsOptional } from 'class-validator';

export class ListOrderQuery extends PaginationQuery {
  @IsEnum(IsMe)
  @Transform(({ value }) => Number(value))
  @IsOptional()
  isMe: IsMe;
}
