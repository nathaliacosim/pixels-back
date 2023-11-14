import { Injectable } from '@nestjs/common';
import { CreateSaidaDto } from './dto/create-saida.dto';
import { UpdateSaidaDto } from './dto/update-saida.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Saida } from './entities/saida.entity';

@Injectable()
export class SaidasService {
  constructor(@InjectModel('Saida') private readonly saidaModel: Model<Saida>) { }

  async create(createColaboradorDto: CreateSaidaDto) {
    const colab = new this.saidaModel(createColaboradorDto);
    return await colab.save();
  }

  async findAll() {
    return await this.saidaModel.find().exec();
  }

  async findOne(id: string) {
    return await this.saidaModel.findById(id).exec();
  }

  async update(id: string, updateSaidaDto: UpdateSaidaDto) {
    await this.saidaModel.updateOne({ _id: id }, updateSaidaDto).exec();
    return this.findOne(id);
  }

  async remove(id: string) {
    return await this.saidaModel.deleteOne({ _id: id }).exec();
  }
}
