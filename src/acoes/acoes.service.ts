import { Injectable } from '@nestjs/common';
import { CreateAcoeDto } from './dto/create-acoe.dto';
import { UpdateAcoeDto } from './dto/update-acoe.dto';

@Injectable()
export class AcoesService {
  create(createAcoeDto: CreateAcoeDto) {
    return 'This action adds a new acoe';
  }

  findAll() {
    return `This action returns all acoes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} acoe`;
  }

  update(id: number, updateAcoeDto: UpdateAcoeDto) {
    return `This action updates a #${id} acoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} acoe`;
  }
}
