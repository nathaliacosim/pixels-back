import { Injectable } from '@nestjs/common';
import { CreateEntradaDto } from './dto/create-entrada.dto';
import { UpdateEntradaDto } from './dto/update-entrada.dto';
import { Model } from 'mongoose';
import { Entrada } from './entities/entrada.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EntradasService {

  constructor(@InjectModel('Entrada') private readonly entradaModel: Model<Entrada>) { }

  async create(createColaboradorDto: CreateEntradaDto) {
    const colab = new this.entradaModel(createColaboradorDto);
    return await colab.save();
  }

  async findAll() {
    return await this.entradaModel.find().exec();
  }

  async findOne(id: string) {
    return await this.entradaModel.findById(id).exec();
  }

  async update(id: string, updateEntradaDto: UpdateEntradaDto) {
    await this.entradaModel.updateOne({ _id: id }, updateEntradaDto).exec();
    return this.findOne(id);
  }

  async remove(id: string) {
    return await this.entradaModel.deleteOne({ _id: id }).exec();
  }
}
