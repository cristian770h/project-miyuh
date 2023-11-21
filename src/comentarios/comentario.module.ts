import { Module } from '@nestjs/common';
import { ComentarioService } from './comentario.service';
import { ComentarioController } from './comentario.controller';
import { Comentario } from './comentario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { NoticiasModule } from 'src/noticias/noticias.module';
import { User } from 'src/users/user.entity';
import { Noticia } from 'src/noticias/noticias.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Comentario,User,Noticia]), UsersModule, NoticiasModule],
  exports:[ComentarioService],
  providers: [ComentarioService],
  controllers:[ComentarioController]
})
export class ComentarioModule {}
