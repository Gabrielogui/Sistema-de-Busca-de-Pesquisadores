import { Injectable } from '@nestjs/common';
import { CreatePesquisadoreDto } from './dto/create-pesquisadore.dto';
import { UpdatePesquisadoreDto } from './dto/update-pesquisadore.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UUID } from 'crypto';

@Injectable()
export class PesquisadoresService {
  constructor(private readonly prisma: PrismaService) {}
  create(createPesquisadoreDto: CreatePesquisadoreDto) {
    return 'This action adds a new pesquisadore';
  }

  findAll() {
    return this.prisma.pesquisador.findMany({
      omit: {
        criado_em: true,
        atualizado_em: true,
      },
    });
  }

  findOne(id: UUID) {
    return `This action returns a #${id} pesquisadore`;
  }

  update(id: UUID, updatePesquisadoreDto: UpdatePesquisadoreDto) {
    return `This action updates a #${id} pesquisadore`;
  }

  remove(id: UUID) {
    return `This action removes a #${id} pesquisadore`;
  }
}
