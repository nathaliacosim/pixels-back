import { Injectable } from '@nestjs/common';
import { FileDTO } from './dto/upload.dto';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();
const supa_url = process.env.SUPA_URL;
const supa_key = process.env.SUPA_KEY;

if (!supa_url || !supa_key) {
  throw new Error('Variáveis de ambiente SUPA_URL ou SUPA_KEY não definidas.');
}

@Injectable()
export class UploadsService {
  async upload(file: FileDTO) {
    const supabase = createClient(supa_url, supa_key, {
      auth:{
        persistSession: false
      }
    });

    const data = await supabase.storage.from("natal_2023_darthesy").upload(file.originalname, file.buffer, {
      upsert: true
    });

    return data;
  }
}
