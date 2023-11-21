
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import {User} from '../users/user.entity';
import { Noticia } from "../noticias/noticias.entity";

@Entity()
export class Comentario{
    @PrimaryGeneratedColumn()
    Id_Comentario: number;

    @ManyToOne(() => User)
    @JoinColumn({name: 'id'})
    Id_User_Id:User;

    @Column()
    Opinion: string;

    @ManyToOne(() => Noticia)
    @JoinColumn({name: 'Id_Noticia'})
    Id_Noticia_Id:Noticia;

}