import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './Dto/create-user.dto';
import { updateUserDto } from './Dto/update-user.dto';
import { loginUserDto } from './Dto/login-userdto';
 

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)private userRepository:Repository<User>){}

    async createUser(user:CreateUserDto){
        const userFound = await this.userRepository.findOne({
            where:{
                Nombre : user.UserName
            }
        })

        if(userFound){
            return new HttpException('Este usuario ya existe',HttpStatus.CONFLICT)
        }
    const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser)
    }

    getUsers(){
        return this.userRepository.find()
    }

    getUser(id:number){
        this.userRepository.findOne({
            where: {
                id:id
            }
        })
    }

    async deleteUser(id : number){
        const userFound = this.userRepository.findOne({
            where : {
                id
            }
        });

        if(!userFound){
            return new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
        }

        return this.userRepository.delete({id});
    }

    async updateUser(id: number, user : updateUserDto){
        const userFound = await this.userRepository.findOne({
            where : {
                id
            }
        })  
        if(!userFound){
            return new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
        }
        const updateUSer = Object.assign(userFound, user);
        return this.userRepository.save(updateUSer);
    }

    loginUser(user:loginUserDto){
        return this.userRepository.findOne({
            where:{
                UserName : user.UserName,
                Password : user.Password
            }
        })
    }
}
