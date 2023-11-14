import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ColaboradoresService } from './colaboradores.service';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';
import { Colaborador } from './entities/colaborador.entity';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('colaboradores')
@Controller('colaboradores')
export class ColaboradoresController {
  constructor(private readonly colaboradoresService: ColaboradoresService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'Colaborador criado com sucesso', type: Colaborador })
  async create(@Body() createColaboradorDto: CreateColaboradorDto) {
    return this.colaboradoresService.create(createColaboradorDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de colaboradores', type: [Colaborador] })
  async findAll(): Promise<Colaborador[]> {
    return this.colaboradoresService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Colaborador', type: Colaborador })
  async findOne(@Param('id') id: string): Promise<Colaborador> {
    return this.colaboradoresService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({ status: 201, description: 'Colaborador atualizado', type: Colaborador })
  async update(@Param('id') id: string, @Body() updateColaboradorDto: UpdateColaboradorDto): Promise<Colaborador> {
    return this.colaboradoresService.update(id, updateColaboradorDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Colaborador excluído', type: Colaborador })
  async remove(@Param('id') id: string) {
    return this.colaboradoresService.remove(id);
  }
}
