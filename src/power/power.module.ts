import { Module } from '@nestjs/common';
import { PowerService } from './power.service';
import { PowerResolver } from './power.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Power } from '../entity/power.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Power])],
  providers: [PowerService, PowerResolver],
})
export class PowerModule {}
