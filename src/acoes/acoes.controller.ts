import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AcoesService } from './acoes.service';
import { CreateAcoeDto } from './dto/create-acoe.dto';
import { UpdateAcoeDto } from './dto/update-acoe.dto';

@Controller('acoes')
export class AcoesController {
  constructor(private readonly acoesService: AcoesService) {}

  @Post()
  create(@Body() createAcoeDto: CreateAcoeDto) {
    return this.acoesService.create(createAcoeDto);
  }

  @Get()
  findAll() {
    return this.acoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.acoesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcoeDto: UpdateAcoeDto) {
    return this.acoesService.update(+id, updateAcoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.acoesService.remove(+id);
  }
}
