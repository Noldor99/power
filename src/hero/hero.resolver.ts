import { HeroService } from './hero.service';
import { CreateHeroInput } from './dto/input/create-hero.input';
import { PaginationHeroInput } from './dto/input/pagination-hero.input';
import { Hero } from '../entity/hero.entity';
import { Args, Query, Mutation, Resolver, Int } from '@nestjs/graphql';
import { GetHeroArgs } from './dto/args/get-hero.args';
import { PaginationResponse } from './dto/response/pagination-hero.res';
import { UpdateHeroInput } from './dto/input/update-hero.input';

@Resolver(() => Hero)
export class HeroResolver {
  constructor(private readonly heroService: HeroService) {}

  @Mutation(() => Hero)
  async createHero(
    @Args('createHero') createHeroData: CreateHeroInput,
  ): Promise<Hero> {
    return await this.heroService.createHero(createHeroData);
  }

  @Query(() => PaginationResponse, { name: 'heroPagination' })
  async findAllWithPagination(
    @Args('paginationInput') paginationInput: PaginationHeroInput,
  ) {
    const [heroes, total] = await this.heroService.findAllHero(paginationInput);
    return { heroes, total };
  }

  @Query(() => [Hero], { name: 'searchHeroes' })
  async searchHeroes(@Args('query') query: string): Promise<Hero[]> {
    return this.heroService.searchHeroesByName(query);
  }

  @Query(() => Hero, { name: 'hero', nullable: true })
  getOne(@Args() getHeroArgs: GetHeroArgs) {
    return this.heroService.findOne(getHeroArgs.heroId);
  }

  @Mutation(() => Hero)
  async updateHero(
    @Args('heroId', { type: () => Int }) heroId: number,
    @Args('updateHeroData') updateHeroData: UpdateHeroInput,
  ): Promise<Hero> {
    return this.heroService.editHero(heroId, updateHeroData);
  }

  @Mutation(() => Hero)
  async removeHero(
    @Args('heroId', { type: () => Int }) heroId: number,
  ): Promise<Hero> {
    return this.heroService.remove(heroId);
  }
}
