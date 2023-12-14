import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateHeroInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  nickname?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  real_name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  origin_description?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  catch_phrase?: string;
}

@InputType()
export class UpdateHeroPartialInput extends PartialType(UpdateHeroInput) {}
