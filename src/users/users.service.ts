import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './Dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)private userRepository:Repository<User>){}

    createUser(user:CreateUserDto){
    const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser)
    }

    getUsers(){
        return this.userRepository.find()
    }
}
