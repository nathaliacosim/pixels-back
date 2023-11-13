import { PartialType } from '@nestjs/mapped-types';
import { CreateAcoeDto } from './create-acoe.dto';

export class UpdateAcoeDto extends PartialType(CreateAcoeDto) {}
