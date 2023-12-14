import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Power } from './power.entity';

@ObjectType()
@Entity()
export class Hero {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  nickname: string;

  @Column()
  @Field()
  real_name: string;

  @Column('text')
  @Field()
  origin_description: string;

  @Column()
  @Field()
  catch_phrase: string;

  @Field(() => [Power])
  @OneToMany(() => Power, (power) => power.hero, { onDelete: 'CASCADE' })
  powers: Power[];
}
