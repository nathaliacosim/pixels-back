import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AcoesService } from './acoes.service';
import { CreateAcaoDto } from './dto/create-acao.dto';
import { UpdateAcaoDto } from './dto/update-acao.dto';
import { Acao } from './entities/acao.entity';

@Controller('acoes')
export class AcoesController {
  constructor(private readonly acoesService: AcoesService) { }

  @Post()
  async create(@Body() createAcaoDto: CreateAcaoDto) {
    return this.acoesService.create(createAcaoDto);
  }

  @Get()
  async findAll(): Promise<Acao[]> {
    return this.acoesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Acao> {
    return this.acoesService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAcaoDto: UpdateAcaoDto): Promise<Acao> {
    return this.acoesService.update(id, updateAcaoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.acoesService.remove(id);
  }
}
