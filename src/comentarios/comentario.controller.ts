import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { CreateComentarioDto } from './comentario_Dto/create-comentario-dto';
import { UpdateComentarioDto } from './comentario_Dto/update-comentario-Dto';
import { ComentarioService } from './comentario.service';
import { Comentario } from './comentario.entity';


@Controller('comentario')
export class ComentarioController {

    constructor(private comentarioService: ComentarioService) { }

    @Get()
    getComentarios(): Promise<Comentario[]> {
        return this.comentarioService.getComentarios();
    }
    @Post()
    CreateComentarioDto(@Body() newComentario: CreateComentarioDto) {
        return this.comentarioService.createComentario(newComentario);
    }

    @Delete(':Id_Comentario')
    deleteComentario(@Param('Id_Comentario', ParseIntPipe) Id_Comentario: number) {
        return this.comentarioService.deleteComentario(Id_Comentario)
    }

    @Patch(':Id_Comentario')
    updateComentario(@Param('Id_Comentario',ParseIntPipe)Id_Comentario :number,@Body()Comentario : UpdateComentarioDto){
        return this.comentarioService.updateComentario(Id_Comentario,Comentario)
    }
}

