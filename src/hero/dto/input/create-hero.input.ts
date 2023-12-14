import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateHeroInput {
  @Field()
  nickname: string;

  @Field()
  real_name: string;

  @Field()
  origin_description: string;

  @Field()
  @IsNotEmpty()
  catch_phrase: string;
}
