import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Power } from '../entity/power.entity';
import { Repository } from 'typeorm';
import { CreatePowerInput } from './dto/input/create-power.input';

@Injectable()
export class PowerService {
  constructor(
    @InjectRepository(Power)
    private powerRepository: Repository<Power>,
  ) {}

  async addPower(dto: CreatePowerInput): Promise<Power> {
    const { heroId, power } = dto;
    const addPower = this.powerRepository.create({
      power,
      hero: { id: heroId },
    });

    await this.powerRepository.save(addPower);
    return addPower;
  }

  async removePower(id: number | null) {
    if (id === null || id === undefined) {
      return { message: 'Power id is not provided' };
    }

    const existingPower = await this.powerRepository.findOne({ where: { id } });

    if (!existingPower) {
      throw new NotFoundException(`Power with id ${id} not found`);
    }

    await this.powerRepository.delete(id);
    return { message: `Power ${id} deleted` };
  }
}
