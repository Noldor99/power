import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Hero } from 'src/entity/hero.entity';

@ObjectType()
export class PaginationResponse {
  @Field(() => [Hero])
  heroes: Hero[];

  @Field(() => Int)
  total: number;
}
