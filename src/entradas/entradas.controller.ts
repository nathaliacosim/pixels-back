import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { EntradasService } from './entradas.service';
import { CreateEntradaDto } from './dto/create-entrada.dto';
import { UpdateEntradaDto } from './dto/update-entrada.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Entrada } from './entities/entrada.entity';

@ApiTags('entradas')
@Controller('entradas')
export class EntradasController {
  constructor(private readonly entradasService: EntradasService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'Entrada criada com sucesso', type: Entrada })
  async create(@Body() createEntradaDto: CreateEntradaDto) {
    return this.entradasService.create(createEntradaDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de entradas', type: [Entrada] })
  async findAll() {
    return this.entradasService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Retorna uma unica entrada', type: Entrada })
  async findOne(@Param('id') id: string) {
    return this.entradasService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({ status: 201, description: 'Entrada atualizada', type: Entrada })
  async update(@Param('id') id: string, @Body() updateEntradaDto: UpdateEntradaDto) {
    return this.entradasService.update(id, updateEntradaDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Entrada excluída', type: Entrada })
  async remove(@Param('id') id: string) {
    return this.entradasService.remove(id);
  }
}