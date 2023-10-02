import { Column, PrimaryGeneratedColumn } from "typeorm";



class Profile {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    nombre : String

    @Column()
    apellido : String

    @Column()
    segundo_apellido : String

    @Column()
    fecha_de_nacimiento : Date

}