import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsNumber } from 'class-validator';

@InputType()
export class PaginationHeroInput {
  @Field()
  @IsOptional()
  @IsNumber()
  page: number;

  @Field()
  @IsOptional()
  @IsNumber()
  limit: number;
}
