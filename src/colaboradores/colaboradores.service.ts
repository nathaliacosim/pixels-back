import { Injectable } from '@nestjs/common';
import { Colaborador } from './entities/colaborador.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';

@Injectable()
export class ColaboradoresService {

  constructor(@InjectModel('Colaborador') private readonly colaboradoresModel: Model<Colaborador>) { }

  async create(createColaboradorDto: CreateColaboradorDto) {
    const colab = new this.colaboradoresModel(createColaboradorDto);
    return await colab.save();
  }

  async findAll() {
    return await this.colaboradoresModel.find().exec();
  }

  async findOne(id: string) {
    return await this.colaboradoresModel.findById(id).exec();
  }

  async update(id: string, updateColaboradorDto: UpdateColaboradorDto) {
    await this.colaboradoresModel.updateOne({ _id: id }, updateColaboradorDto).exec();
    return this.findOne(id);
  }

  async remove(id: string) {
    return await this.colaboradoresModel.deleteOne({ _id: id }).exec();
  }
}
