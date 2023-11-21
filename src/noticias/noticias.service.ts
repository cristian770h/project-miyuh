import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Noticia } from './noticias.entity';
import { Repository } from 'typeorm';
import { CreateNoticiaDto } from './noticias_Dto/create-noticia-dto';
import { updateNoticiaDto } from './noticias_Dto/update-noticia.dto';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class NoticiasService {
    constructor(@InjectRepository(Noticia) private noticiaRepository: Repository<Noticia>) { }


    async createNoticia(noticia: CreateNoticiaDto) {
        const newNoticia = this.noticiaRepository.create(noticia)
        return this.noticiaRepository.save(newNoticia)
    }

    getNoticias() {
        return this.noticiaRepository.find()
    }

    getNoticia(id_Noticia: number) {
        this.noticiaRepository.findOne({
            where: {
                id_Noticia: id_Noticia
            }
        })
    }

    async deleteNoticia(id_Noticia: number) {
        const NoticiaFound = this.noticiaRepository.findOne({
            where: {
                id_Noticia
            }
        });

        if (!NoticiaFound) {
            return new HttpException('Noticia no encontrado', HttpStatus.NOT_FOUND);
        }

        return this.noticiaRepository.delete({ id_Noticia });
    }


    async updateNoticia(id_Noticia: number, noticia : updateNoticiaDto){
        const noticiaFound = await this.noticiaRepository.findOne({
            where : {
                id_Noticia
            }
        })  
        if(!noticiaFound){
            return new HttpException('Noticia no encontrado', HttpStatus.NOT_FOUND);
        }
        const updateNoticia = Object.assign(noticiaFound,noticia);
        return this.noticiaRepository.save(updateNoticia);
    }
}


