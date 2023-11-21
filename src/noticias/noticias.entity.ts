import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Noticia {
    @PrimaryGeneratedColumn()
    id_Noticia: number;

    @Column()
    Titulo: string;

    @Column()
    Img_noticia: string;

    @Column()
    Noticia: string;

}

