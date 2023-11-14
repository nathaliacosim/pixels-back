import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { SaidasService } from './saidas.service';
import { CreateSaidaDto } from './dto/create-saida.dto';
import { UpdateSaidaDto } from './dto/update-saida.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Saida } from './entities/saida.entity';

@ApiTags('saidas')
@Controller('saidas')
export class SaidasController {
  constructor(private readonly saidasService: SaidasService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'Saida criada com sucesso', type: Saida })
  async create(@Body() createsaidaDto: CreateSaidaDto) {
    return this.saidasService.create(createsaidaDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de saidas', type: [Saida] })
  async findAll() {
    return this.saidasService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Retorna uma unica saida', type: Saida })
  async findOne(@Param('id') id: string) {
    return this.saidasService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({ status: 201, description: 'saida atualizada', type: Saida })
  async update(@Param('id') id: string, @Body() updateSaidaDto: UpdateSaidaDto) {
    return this.saidasService.update(id, updateSaidaDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Saida excluída', type: Saida })
  async remove(@Param('id') id: string) {
    return this.saidasService.remove(id);
  }
}