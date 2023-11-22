import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { CreateNoticiaDto } from './noticias_Dto/create-noticia-dto';
import { NoticiasService } from './noticias.service';
import { updateNoticiaDto } from './noticias_Dto/update-noticia.dto';
import { Noticia } from './noticias.entity';
@Controller('Noticias')
export class NoticiasController {
    constructor(private noticiasService: NoticiasService) { }
    @Get()
    getNoticias(): Promise<Noticia[]> {
        return this.noticiasService.getNoticias();
    }

    @Get(':id_Noticia')
    getNoticia(@Param('id_Noticia', ParseIntPipe) id_Noticia: number) {
        return this.noticiasService.getNoticia(id_Noticia);
    }

    @Post()
    CreateNoticiaDto(@Body() newNoticia: CreateNoticiaDto) {
        return this.noticiasService.createNoticia(newNoticia);
    }

    @Delete(':id_Noticia')
    deleteNoticia(@Param('id_Noticia', ParseIntPipe) id_Noticia: number) {
        return this.noticiasService.deleteNoticia(id_Noticia)
    }

    @Patch(':id_Noticia')
    updateNoticia(@Param('id_Noticia', ParseIntPipe) id_Noticia: number, @Body() Noticia: updateNoticiaDto) {
        return this.noticiasService.updateNoticia(id_Noticia, Noticia)
    }
}
