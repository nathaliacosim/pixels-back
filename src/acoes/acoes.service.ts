import { Injectable } from '@nestjs/common';
import { UpdateAcaoDto } from './dto/update-acao.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Acao } from './entities/acao.entity';
import { CreateAcaoDto } from './dto/create-acao.dto';

@Injectable()
export class AcoesService {

  constructor(@InjectModel('Acao') private readonly acoesModel: Model<Acao>) { }

  async findAll() {
    return await this.acoesModel.find().exec();
  }

  async findOne(id: string) {
    return await this.acoesModel.findById(id).exec();
  }

  async create(acao: CreateAcaoDto) {
    const acoes = new this.acoesModel(acao);
    return await acoes.save();
  }

  async update(id: string, acao: UpdateAcaoDto) {
    await this.acoesModel.updateOne({ _id: id }, acao).exec();
    return this.findOne(id);
  }

  async remove(id: string) {
    return await this.acoesModel.deleteOne({ _id: id }).exec();
  }
}
