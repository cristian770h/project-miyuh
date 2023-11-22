
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column()
  Nombre: string;

  @Column()
  Apellido: string;

  @Column()
  UserName: string;

  @Column()
  Password: string;

  @Column({ default: true })
  isActive: boolean;
  
  @Column({default:false})
  admin:boolean;

}