import { Injectable } from '@nestjs/common';
import { CreateColaboradoreDto } from './dto/create-colaboradore.dto';
import { UpdateColaboradoreDto } from './dto/update-colaboradore.dto';

@Injectable()
export class ColaboradoresService {
  create(createColaboradoreDto: CreateColaboradoreDto) {
    return 'This action adds a new colaboradore';
  }

  findAll() {
    return `This action returns all colaboradores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} colaboradore`;
  }

  update(id: number, updateColaboradoreDto: UpdateColaboradoreDto) {
    return `This action updates a #${id} colaboradore`;
  }

  remove(id: number) {
    return `This action removes a #${id} colaboradore`;
  }
}
