import { Module } from '@nestjs/common';
import { HeroService } from './hero.service';
import { HeroResolver } from './hero.resolver';
import { Hero } from 'src/entity/hero.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Hero])],
  providers: [HeroService, HeroResolver],
  exports: [HeroService],
})
export class HeroModule {}
