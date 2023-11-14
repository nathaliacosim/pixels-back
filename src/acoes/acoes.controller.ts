import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AcoesService } from './acoes.service';
import { CreateAcaoDto } from './dto/create-acao.dto';
import { UpdateAcaoDto } from './dto/update-acao.dto';
import { Acao } from './entities/acao.entity';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('acoes')
@Controller('acoes')
export class AcoesController {
  constructor(private readonly acoesService: AcoesService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'Ação criada com sucesso', type: Acao })
  async create(@Body() createAcaoDto: CreateAcaoDto) {
    return this.acoesService.create(createAcaoDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de ações', type: [Acao] })
  async findAll(): Promise<Acao[]> {
    return this.acoesService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Retorna uma unica ação', type: Acao })
  async findOne(@Param('id') id: string): Promise<Acao> {
    return this.acoesService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({ status: 201, description: 'Ação atualizada', type: Acao })
  async update(@Param('id') id: string, @Body() updateAcaoDto: UpdateAcaoDto): Promise<Acao> {
    return this.acoesService.update(id, updateAcaoDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Ação excluída', type: Acao })
  async remove(@Param('id') id: string) {
    return this.acoesService.remove(id);
  }
}
