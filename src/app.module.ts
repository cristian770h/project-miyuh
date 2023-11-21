import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { NoticiasModule } from './noticias/noticias.module';
import { ComentarioController } from './comentarios/comentario.controller';
import { ComentarioModule } from './comentarios/comentario.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'miyuh',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    NoticiasModule,
    ComentarioModule
  ],
  controllers: [AppController, ComentarioController],
  providers: [AppService],
})
export class AppModule {}
