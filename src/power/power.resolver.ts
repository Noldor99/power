import { PowerService } from './power.service';
import { CreatePowerInput } from './dto/input/create-power.input';
import { Power } from 'src/entity/power.entity';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver(() => Power)
export class PowerResolver {
  constructor(private readonly powerService: PowerService) {}

  @Mutation(() => Power)
  createPower(@Args('createPower') createPowerData: CreatePowerInput) {
    return this.powerService.addPower(createPowerData);
  }

  @Mutation(() => Power, { name: 'removePower' })
  async removePower(@Args('id') id: string) {
    return this.powerService.removePower(+id);
  }
}
