import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ColaboradoresService } from './colaboradores.service';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';
import { Colaborador } from './entities/colaborador.entity';

@Controller('colaboradores')
export class ColaboradoresController {
  constructor(private readonly colaboradoresService: ColaboradoresService) { }

  @Post()
  async create(@Body() createColaboradorDto: CreateColaboradorDto) {
    return this.colaboradoresService.create(createColaboradorDto);
  }

  @Get()
  async findAll(): Promise<Colaborador[]> {
    return this.colaboradoresService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Colaborador> {
    return this.colaboradoresService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateColaboradorDto: UpdateColaboradorDto): Promise<Colaborador> {
    return this.colaboradoresService.update(id, updateColaboradorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.colaboradoresService.remove(id);
  }
}
