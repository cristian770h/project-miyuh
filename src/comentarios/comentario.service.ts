import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Comentario } from './comentario.entity';
import { Repository } from 'typeorm';
import { CreateComentarioDto } from './comentario_Dto/create-comentario-dto';
import { UpdateComentarioDto } from './comentario_Dto/update-comentario-Dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Noticia } from 'src/noticias/noticias.entity';
@Injectable()
export class ComentarioService {
    constructor(@InjectRepository(Comentario)
    private comentarioRepository: Repository<Comentario>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Noticia)
        private noticiaRepository: Repository<Noticia>
    ) { }

    async createComentario(createComentarioDto: CreateComentarioDto): Promise<Comentario> {
        const user = await this.userRepository.findOne({ where: { id_user: createComentarioDto.Id_User_Id } });
        const noticia = await this.noticiaRepository.findOne({ where: { id_Noticia: createComentarioDto.Id_Noticia_Id } });

        if (!user || !noticia) {
            throw new HttpException('Usuario o Noticia no encontrados', HttpStatus.BAD_REQUEST);
        }

        const comentario = this.comentarioRepository.create({
            Opinion: createComentarioDto.Opinion,
            Id_User_Id: user,
            Id_Noticia_Id: noticia
        });

        return this.comentarioRepository.save(comentario);
    }

    getComentarios() {
        return this.comentarioRepository.find()
    }

    getComentario(Id_Comentario: number) {
        this.comentarioRepository.findOne({
            where: {
                Id_Comentario: Id_Comentario
            }
        })
    }


    async deleteComentario(Id_Comentario: number) {
        const ComentarioFound = this.comentarioRepository.findOne({
            where: {
                Id_Comentario
            }
        });

        if (!ComentarioFound) {
            return new HttpException('Comentario encontrado', HttpStatus.NOT_FOUND);
        }

        return this.comentarioRepository.delete({ Id_Comentario });
    }

    async updateComentario(Id_Comentario: number, comentarioDto: UpdateComentarioDto): Promise<Comentario> {
        const comentarioFound = await this.comentarioRepository.findOne({ where: { Id_Comentario } });

        if (!comentarioFound) {
            throw new HttpException('Comentario no encontrado', HttpStatus.NOT_FOUND);
        }

        // Actualiza el comentario con los nuevos datos
        const updatedComentario = Object.assign(comentarioFound, comentarioDto);

        // Guarda los cambios en la base de datos
        return this.comentarioRepository.save(updatedComentario);
    }
}

/*const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser)
    }*/
