import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Hero } from './hero.entity';

@ObjectType()
@Entity()
export class Power {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  power: string;

  @Field(() => Hero)
  @ManyToOne(() => Hero, (hero) => hero.powers)
  hero: Hero;
}
