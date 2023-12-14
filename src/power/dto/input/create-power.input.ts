import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePowerInput {
  @Field()
  power: string;

  @Field()
  heroId: number;
}
