import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { GruposPesquisaModule } from './grupos-pesquisa/grupos-pesquisa.module';
import { PesquisadoresModule } from './pesquisadores/pesquisadores.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  }),{
    module: PrismaModule,
    global: true,
  }, GruposPesquisaModule, PesquisadoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
